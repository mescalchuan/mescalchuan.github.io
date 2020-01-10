# 配置

#### Entry
如果entry是一个object，就代表有多个入口文件（就会出现多个chunk），chunk的名称就是object里的key。
﻿
#### Output
多个chunk输出时，需要借助模板变量来区分。
```js
filename: '[name].js' //模板变量
```
* id：chunk的唯一标识，从0开始
* name：chunk的名称
* hash：chunk唯一标识的hash值
* chunkhash：chunk内容的hash值
﻿
(chunk)hash值还可以指定位数：`filename: '[chunkhash:8]'`
﻿
chunkFilename：用于按需加载
```js
chunkFilename: [id].js
﻿
//入口
//假设async是需要异步加载的模块
onclick = () => import('./async.js').then(data => console.log(data));
//打开浏览器，你会发现你实际加载的会是0.js
```
﻿
publicPath：按需加载和需要单独提取的资源（如使用url-loader和file-loader的图片）的基本路径。publicPath默认是参考自html的路径的，比如
```js
css
   ----main.css
image
   ----bk.jpg(很大)
js
   ----main.js
   ----async.js
pages
   ----index.html
```
﻿
我在main的js中异步加载async.js，实际上打完包后它加载的是`pages/0.js`，而实际上该目录下没有这个js。这时我就要将publicPath修改为`../`。其他资源与异步加载的js同理，都需要将publicPath修改成正常路径，比如：
```js
//css文件
background: url('../image/bk.jpg')
//js
import from '../main.css';
```
打包后，css将变成`background: url('绝对路径/pages/bk.jpg')`，你需要将publicPath修改成`../image/`，css就变成了`background: url('绝对路径/image/bk.jpg')`。
﻿
webpack的按需加载的原理就是使用Jsonp，动态向html中插入一段js代码来异步请求资源。
﻿
#### Module
#### Resolve
webpack会在启动后从entry出发找到所有模块，这会影响打包速度
﻿
alias：通过别名来更改导入的路径
```js
resolve: {
	alias: {
    	components: './src/components/'
    }
}
//js
import Button from 'components/button'
//就变成了
import Button from './src/components/button
```
﻿
extensions：导入语句没有后缀时，webpack会自动带上后缀去访问文件，在这里配置后缀
```js
resolve: {
	extensions: ['.js', '.json']
}
```
﻿
modules：告诉webpack去哪些目录下寻找第三方模块，默认是node_modules。如果我们自己的某些模块被其他地方大量引用，可能会出现
`import Button from '../../../common/component/button'`这样的情况，我们也可以把Button当成第三方模块修改默认的引入路径
```js
resolve: {
	modules: ['./common/component', 'node_modules']
}
//js
import Button from 'button'
```
﻿
#### 其他
Devtool：告诉webpack如何生存source map，默认是false不生成。
```js
module.exports = {
	devtool: 'source-map'
}
```
﻿
Externals：告诉webpack哪些模块不用被打包进来，多用于第三方库或框架，不用将它们打包进来以减少模块体积，直接使用src引入即可，在代码里你仍可以使用模块的方式引入它们
```js
module.exports = {
	externals: {
    	'react': 'React',
        'react-dom': 'ReactDOM'
    }
}
﻿
//html
<script src="//cdn/react.js"/>
<script src="//cdn/react-dom.js"/>
//js
//仍然可以这样引入
import React from 'react';
import ReactDOM from 'react-dom';
```
﻿
#### 配置类型
除了导出一个对象外，webpack还支持导出一个函数，return一个对象或者return promise（用于含有异步操作）。
```js
module.exports = function(env = {}, argv) {
	const plugins = [];
    return {
    	modules: {},
        plugins,
        devtool: 'source-map',
        externals: {}
    }
}
﻿
module.exports = function(env = {}, argv) {
	return new Promise((resolve, reject) => {
    	//你还可以做其他的异步操作，直到所有异步操作完成后，resovle webpack的配置
    	setTimeout(() => {
        	resolve({
            	modules: {},
        		plugins,
        		devtool: 'source-map',
        		externals: {}
            })
        })
    })
}
```