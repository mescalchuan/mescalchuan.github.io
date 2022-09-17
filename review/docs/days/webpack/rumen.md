# 入门

#### Loader
```js
use: ['style-loader', 'css-loader']
```
Loader的执行顺序是从后往前的，因此，先用css-loader读取css文件，再由style-loader将css内容注入到script标签里。每个Loader都可以以url的形式传入参数`use: ['css-loader?minimize']`。
﻿
style-loader的工作原理大致就是将css内容用js里的字符串存储起来，在网页执行JS时通过DOM操作动态向head标签中插入style标签。
﻿
#### DevServer
DevServer会将webpack构建出的文件保存在内存中，访问时必须通过http访问。
﻿
#### 核心概念
* Entry：入口，构建时的第一步将从入口开始
* Module：模块，webpack一切皆模块，一个模块对应一个文件
* Chunk：代码块，由多个模块组成，用于代码合并与分割
* Loader：模块转换器，将原内容转换成新内容
* Plugin：扩展插件，用于改变构建结果
* Output：输出结果
﻿
Webpack在启动后会从entry里配置的module开始递归解析entry所依赖的所有module。每找到一个module就会根据配置里的loader去转换它。对该module解析后，再去解析它所依赖的module以此类推。这些模块会以entry为单位进行分组，比如，一个entry及其所以依赖的所有module就是一组，也就是一个chunk。最后，所有的chunk被转换成文件输出。在整个流程中，webpack会在恰当的时机执行plugin（时机取决于每个plugin）。