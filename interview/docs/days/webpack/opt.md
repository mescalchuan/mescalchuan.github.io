# 优化

#### 缩小文件搜索范围
* 优化loader配置：loader对文件的转换是很耗时的，使用include或exclude告诉webpack哪些文件需要搜索、哪些不需要搜索。
* 优化resolves.modules配置：告诉webpack第三方模块和自己常用的模块在哪，让webpack直接去访问而不是一层层寻找（文件夹级别）。
* 优化resolve.alias配置：通过别名将路径映射成一个新的路径（多用于第三方模块）。`alias: {'react': path.resolve(__dirname, './node_modules/react/dist/react.min.js')}`。如果不设置，那么会从`node_modules`开始一直寻找和层层遍历，直到找到`react.min.js`（文件级别）。
* 优化resolve.extensions配置：没有后缀时，webpack会尝试添加后缀去询问文件是否存在，所以这个配置也会影响性能，最好不要使用或者配置项要尽可能少，出现频率较高的后缀要放在最前面（最好是import时刻使用后缀而不是让webpack帮你添加）。
* 优化module.noParse：让webpack忽略对部分没采用模块化的文件的递归解析处理（该模块要求能直接运行在浏览器上的，因为webpack不会对它们转码）。`noParse: [/react\.min\.js$/]`。
﻿
#### 使用DllPlugin
dll文件叫做动态链接库，里面可以包括其他模块或数据。在webpack中，将一些第三方的模块做成dll形式，只打包一次，之后直接从dll中读取（除非这个模块的代码有更改了）。该模块被打包成了`react.dll.js`，对外暴露全局的`_dll_react`。
```js
//webpack_dll.config.js
entry: 'react',
output: {
	filename: '[name].bundle.js',
    path: __dirname,
    library: '_dll_[name]'
},
plugins: [new DllPlugin({
	name: '_dll_[name]',
	path: path.join(__dirname, '[name].manifest.json')    
})]
//运行webpack --config webpack_dll.config.js来构建dll
//只需运行这一次
//之后按照之前的正常构建项目即可
```
﻿
```js
//webpack.config.js
plugins: [
	new DllReferencePlugin({
    	manifest: require('./react.manifest.json')
    })
]
```
你会发现打包后多出了`react.dll.js`和`react.manifest.json`两个文件，一个是包含了react的模块内部通过`_dll_react`将自己暴露在全局中供其他模块使用。一个是描述文件，用于描述在动态链接库中包含了哪些文件（路径、id等）。
﻿
#### 使用HappyPack
HappyPack允许多线程处理任务（在js中就是多进程）。
﻿
```js
module: {
	rules: [{
		test: /\.js$/,
    	use: ['happypack/loader?id=babel']
	}]
},
plugins: [
	new HappyPack({
    	id: 'babel',
        loaders: [{
        	loader: 'babel-loader',
            options: {
            	presets: ['es2015', 'stage-2']
            }
        }]
    })
]
```
原理：webpack最耗时的就是loader对文件的转换操作，因为要转换的文件数据量巨大，而且这些转换操作都只能一个一个处理。HappyPack的核心原理就是将这部分任务分解到多个进程中去并行处理，从而减少总的构建时间。
﻿
#### 使用ParallelUglifyPlugin
由于压缩代码时需要先将代码转换成AST语法树，再去根据规则分析和处理AST，导致计算量巨大。使用ParallelUglifyPlugin并行处理，同HappyPack。
﻿
#### 自动刷新
文件监听的原理：定时获取文件的最后编辑时间，每次都存下最新的最后编辑时间，如果发现当前获取的时间和最后一次保存的编辑时间不一致，说明文件有更改。通过`watchOptions.poll`配置定时检查的周期。当文件变化时，不是立即告诉监听者，而是先缓存起来，收集一段时间的变化后（`watchOptions.aggregateTimeout`）在一次性告诉监听者，以防止高频修改文件导致重复构建的卡死。至于多入口文件，则是从入口开始递归解析它所依赖的文件，将它们都加入监听列表中。
﻿
优化文件监听：减少监听文件数量-->`watchOptions.ignored = /node_modules/`；增大`aggregateTimeout`的值，减小`poll`的值。
﻿
自动刷新原理：借助浏览器的接口进行刷新；向页面中注入代理客户端代码，通过代理客户端去刷新整个页面；将页面装进一个iframe中，通过iframe去看到最新效果。
﻿
优化自动刷新：`devServer.inline`代表是否向chunk中注入代理客户端，在开启时devServer会向每个chunk注入代理客户端的代码导致构建缓慢。其实要完成自动刷新，一个页面只需要一个代理客户端，devServer之所以会为每个chunk注入，是因为它不知道某个页面依赖了哪些chunk。所以，关闭inline来提高性能。
```html
//html
//自动刷新实际上是嵌入了iframe
<iframe id="iframe">
	#document
    <html>
    	<head>...</head>
        <body>
        	<div id="app">
            	<h1 data-reactroot>hello, webpack</h1>
            </div>
            ...
        </body>
    </html>
</iframe>
```
﻿
`webpack-dev-server --inline false
`
﻿
#### 模块热替换
不刷新整个页面而是只更新改变的模块。
﻿
原理：与自动刷新原理类似，都是往页面中注入一个代理客户端来连接devServer和网页，不同在于模块热替换的独特的模块替换机制。`webpack-dev-server -hot`
﻿
优化：使用`plugins: [new NamedModulesPlugin()]`在控制台上输出热替换的模块名字（不使用该插件的话则默认是输出id）。同文件监听，需要忽略node_modules目录来减少监听数量（热替换使用inline: false，也就是说只能减少文件监听数量）。
﻿
#### 区分环境
```js
process.env.NODE_ENV === 'production'
﻿
plugins: [
	new DefinePlugin({
    	'process.env': {
        	NODE_ENV: JSON.stringify('production')
        }
    })
]
//之所以使用JSON序列化是因为环境变量值需要一个由双引号包裹的字符串。'"production"'
```
﻿
#### Tree Shaking
提出js中用不上的死代码，要求代码必须采用es6的模块化语法
```js
.babelrc
{
	"presets": [[
    	"env", {
        	"modules": false 
            //告诉babel关闭es6的模块转换功能以保留原本的es6模块化语法
        }
    ]]
}
```
﻿
```js
//utils.js
export functionA
export functionB
﻿
//main.js
import {functionA} from './utils';
functionA();
﻿
//TreeShaking后
//utils
export functionA
```
﻿
#### 提取公共代码
```js
new CommonsChunkPlugin({
	chunks: ['a', 'b'],
    name: 'common'
})
new CommonsChunkPlugin({
	chunks: ['common', 'base'],
    name: 'base'
})
//先将a和b提取成common
//再将common和base提取成base
//也就是说，CommonsChunk可以使用多次
```
CommonsChunkPlugin提供一个选项minChunks，表示文件要被提取出来时需要在指定的Chunks中出现的最小次数。假如`minChunks=2; chunks=['a', 'b', 'c', 'd']`，代表：任何一个文件只要在abcd这四个chunk的两个以上的chunk中都出现过，则该文件就会被提取出来。比如：e在a、b中均出现过，则e被提取。
﻿
#### 分割代码以按需加载
坑请参考配置里面的关于publicPath那一节。
```js
output: {
	filename: '[name].js',
    chunkFilename: '[name].js' //chunkFilename中的[name]与[id]值相同
}
﻿
//main
$scope.click = () => import('./common/async.js').then(data => console.log(data));
```
﻿
可以在自己的js中为生成的按需加载的模块定义名字
```js
import (/* webpackChunkName: "page-login" */ './common/async.js').then(...)
﻿
//最终生成
page-login.js而不是0.js
```
﻿
#### Scope Hoisting
作用域提升：减少函数声明语句、减少运行时创建的函数作用域。其原理就是分析模块间的依赖关系，尽可能将被打散的模块合并到一个函数中（前提是不能造成代码冗余）。
﻿
同TreeShaking，要求源码必须采用es6模块化语句。