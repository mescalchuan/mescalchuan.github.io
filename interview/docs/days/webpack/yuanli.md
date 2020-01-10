# 原理

#### 流程细节
* 初始化：启动构建，读取与合并参数配置参数，加载plugin，实例化compiler。
* 编译：从Entry出发，针对每个module串行调用对应的loader去翻译文件内容，再找到该module依赖的module，递归地进行编译。
* 输出：将编译后的module组合成chunk，将chunk转换成文件，输出到文件系统中。
﻿
#### 输出文件分析
```js
//js
const show = require('./show.js');
show('webpack');
﻿
//webpack
module.exports = {
	entry: './main.js',
    output: {
    	filename: 'bundle.js',
        path: __dirname
    }
}
﻿
//bundle.js
(
	//modules是存放所有模块的数组，每一个均为函数
	function(modules) {
    	//已加载的模块，提升性能
    	var installedModules = {};
        //自己模拟了一个commonJS，moduleId为module的index
        function __webpack_require_(moduleId) {
        	//如果要加载的模块已经被加载过，则直接从installedModules读取
            //否则，新建一个模块然后将其存在installedModules里
            var module = installedModules[moduleId] = {
            	//index
            	i: moduleId,
                //has installed
                l: false,
                exports: {}
            }
            //再调用这个函数，将需要的参数传入
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            //module设为已加载并return module.exports;
            return __webpack_require__(/*启动模块的index，默认是0*/0)
        }
    }
)([/*存放所有module的数组*/])
﻿
//至于modules数组里面每个module的内容
(
	function (moduleId, exports, __webpack_require__) {
    	//通过__webpack_require__规范导出
        const show = __webpack_require__(1);
        show('webpack');
        /*1*/
        (function (module, exports) {
        	/*show的业务逻辑*/
            module.exports = show;
        })
    }
)
```
﻿
webpack之所以要将输入文件全部合并成一个输出文件，是为了减少网络请求次数（浏览器不能像node那样快速在本地加载一个个模块文件，只能执行网络请求，数量较多时加载时间会变长）。
﻿
```js
//异步module的原理
//js
import ('./show').then(show => show('webpack'));
﻿
//0.bundle.js（异步代码）
webpackJsonp([0], [
	(function(module, exports) {
    	/*show的业务逻辑*/
        module.exports = show;
    })
])
﻿
//bundle.js
(
	function(modules) {
    	//webpackJsonp用于从异步加载的文件中安装模块
        window['webpackJsonp'] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
        	//小于等于chunkIds的模块都标识为加载成功
            //将需要异步加载的moreModules全部push到modules里
            //为每个模块配置加载状态
            __webpack_require__.e = function(chunkId) {
           	   //如果已经加载成功，则直接返回resolve Promise
               //如果正在网络加载中，返回installedChunkData[2]
               //如果是第一次加载，则去加载文件（向html head中插入一个script标签去异步加载文件，路径由publicPath和chunkId组成），与此同时
               var promise = new Promise(function(resolve, reject) {
            	    installedChunkData = installedChunks[chunkId] = [resolve, reject];
               	    installedChunkData[2] = promise;
               }
           }
        }
        return __webpack_require__(0); //和前面的一样，加载并执行入口模块
    }
)([/*存放所有没有经过异步加载的，随入口文件加载的模块*/])
﻿
//然后，你的
import ('./show').then(show => show('webpack'))就变成了
__webpack_require__.e(0).then(__webpack_require__.bind(null, 1)).then(show => show('webpack'));
```