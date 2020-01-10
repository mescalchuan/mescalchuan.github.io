# 实战

#### SCSS
```js
use: ['style-loader', 'css-loader', 'sass-loader']
```
* 通过sass-loader将scss转换为css
* 通过css-loader找出@import\import\url()这样的css导入语句，模块化、压缩化等等操作之后再将其交给style-loader
* 最后用style-loader将样式变成js的字符串，动态将内容插入到head的style标签中
﻿
#### 为单页应用生成HTML（web-webpack-plugin）
该插件能够生成html文件，比html-webpack-plugin更好用
```js
{
	entry: {
    	app: './main.js'
    },
    output: {
    	filename: '[name]_[chunkhash:8].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {/*一系列loader和css抽取*/},
    plugins: [
    	new WebPlugin({
        	template: './template.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
        	filename: '[name]_[contenthash:8].css'
        })
    ]
}
﻿
//template.html
<head>
	<!--来自名叫app的chunk，inline代表将其插入到这里-->
	<link rel="stylesheet" href="app?_inline" />
</head>
<body>
	...
    <!--不一定非得是webpack里的chunk，本地文件也可以。意思是：将路径下的文件内容插入到这里-->
    <script src="./common/test.js?_inline"></script>
    <script src="app"></script>
</body>
```
最终变成了
```html
<head>
	<style>
    	app chunk里的内容
    </style>
</head>
<body>
	...
    <script>
    	./common/test.js里的内容
    </script>
    <script src="app_746f32b2.js"></script>
</body>
```
﻿
#### 管理多页应用
类似于angular-m-cli，现在已经有了插件：AutoWebPlugin
规定了目录结构
```js
pages
	----index
   		----index.css
    	----index.js
	----login
    	----index.css
        ----index.js
common.css
test.js
tempate.html
```
```js
const autoWebPlugin = new AutoWebPlugin('pages', {
	template: './template.html',
    postEntrys: ['./common.css'],
    commonsChunk: {
    	name: 'app'
    }
})
module.exports = {
	entry: autoWebPlugin.entry({
    	//...
    }),
    plugins: [autoWebPlugin]
}
```
﻿
```html
<head>
	<!--style的注入位置-->
	<!--STYLE-->
</head>
<body>
	<script src="./common/test.js?_inline"></script>
    <!--script的注入位置-->
    <!--SCRIPT-->
</body>
```
结果
```html
<head>
	<!--style的注入位置-->
	<link rel="stylesheet" href="common_7cc98ad0.css"/>
    <link rel="stylesheet" href="login_e31e214b.css"/><!--页面自己的css-->
</head>
<body>
	<script src="./common/test.js?_inline"></script>
    <!--script的注入位置-->
    <script>
    	./common/test.js里的内容
    </script>
    <script src="app_a1d9142f.js"></script>
    <script src="login_f926c4e6.js"></script>
</body>
```
由于模板html被当做项目的所有页面的html，因此引入的css和js的名字就不能是写死了的，而是用<!--STYLE-->和<!--SCRIPT-->来当做插槽。
﻿
#### 构建NPM模块
发布到npm的模块大多都是commonJS规范。es6或jsx代码不仅要转换成es5，还要支持commonJS规范。
﻿
以react为例
```js
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports {
	entry: './src/index.js',
    output: {
    	filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'commonjs2' //输出的代码符合commonJS2规范，以便其他模块使用
    },
   	externals: /^(react|babel-runtime)/, //不要把react和babel-runtime打包进来
    module: {
    	rules: [{
    		test: /\.js$/,
        	use: ['babel-loader'],
        	exclude: /node_modules/
    	}, {
    		test: /\.css/,
        	use: ExtractTextPlugin.extract({
        		use: ['css-loader']
        	})
    	}]
    },
    plugins: [
    	new ExtractTextPlugin({
        	filename: 'index.css',
        })
    ],
    devtool: 'source-map'
}
```
```js
//.babelrc
//babel会在每个输出文件中内嵌babel的辅助函数。
//为了防止冗余，使用babel-plugin-transform-runtime插件
//npm i babel-plugin-transform-runtime -D
//npm i babel-runtime -S
{
	"plugins": [[
    	"transform-runtime", {
        	"polyfill": false
        }
    ]]
}
```
#### 代码检查
```js
npm i eslint-loader
npm i stylelint-webpack-plugin
﻿
rules: [
	{
    	test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre' //将eslint-loader的执行顺序放在最前面
    }
]
﻿
plugins: [new StyleLintPlugin()]
```
﻿
使用代码检查会导致构建速度变慢，建议只在开发环境下使用。
﻿
#### 加载图片
```js
npm i url-loader
npm i file-loader
﻿
//30kb一下直接以dataURL的形式写入，否则外部引入
{
	test: /\.png$/,
    use: [{
    	loader: 'url-loader',
        options: {
        	limit: 1024 * 30, //也就是30kb
        	fallback: 'file-loader'
        }
    }]
}
```
﻿
#### Source Map
* eval：用eval包裹需要安装的模块
* source-map：生成独立的source map文件
* hidden：不在js中指出source map文件的存在，使得浏览器不会去加载它
* inline：base64的形式直接注入到js中
* cheap：生产的cource map不会包含列信息以减小计算量，生成的文件更小
* module：来自loader的source map被简单处理成每行一个模块
﻿
如何取舍？
source-map虽然输出质量最高，但也是最慢的，且源码全部暴露
﻿
* 开发环境下：使用cheap-module-eval-source-map，因为速度最快，因为一般的开发环境不用压缩代码，即使没有列信息也不影响debug
* 生产环境下：使用hidden-source-map，意思是生成的最详细的source map但不会将其暴露出去。