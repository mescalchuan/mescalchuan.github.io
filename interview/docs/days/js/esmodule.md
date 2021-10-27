# ES-Module

### 支持程度

现代浏览器支持 import 和 export，版本如下：

- Safari 10.1.
- Chrome 61.
- Firefox 60.
- Edge 16.

### 使用

```html
<script type="module">
  import A from './moduleA.js'
	console.log(A)
</script>
// moduleA.js
import B from './moduleB.js'
B.name = 'mescal'
export B
```

> 路径需要写全，不会像 node_modules 和 webpack.resolve 那样自动索引路径

```html
<script type="module" src="module.mjs"></script>
<!-- 向后兼容 -->
<script nomodule src="fallback.js"></script>
```

### 加载顺序

```html
<script type="module" src="./moduleA.js"></script>
<script src="./A.js"></script>
<script defer src="./B.js"></script>
<!-- A -> moduleA -> B -->
```

script 标签在加载的时候会阻塞 html 解析，可以通过 defer 属性使 script在文档解析完成之后再加载，从而避免阻塞，同时执行顺序为出现包含 defer 属性的标签顺序。module script 默认行为类似 defer 属性，并且没有办法让 module script 像普通的 script 那样在加载时阻塞 html 解析。module script 和存在 defer 属性的普通 script 使用相同的执行队列。

> 给未添加 src 属性的 script 标签添加 defer 不会生效，会被忽略成普通的 script。而 async 属性则在有 src 和无 src 的 script 上均生效，执行顺序：下载快的先执行，下载慢的后执行。

### 执行次数

相同的模块仅会加载一次：

```html
<script type="module">
  import A from './moduleA.js'
	console.log(A)
</script>
<script type="module">
  import A from './moduleA.js'
	console.log(A)
</script>
```

![image-20211026111554715](/Users/qinxianshengmescal/Library/Application Support/typora-user-images/image-20211026111554715.png)



虽然代码里引入了两次 moduleA（依赖于 moduleB），但实际仅会加载一次，而执行两次逻辑（两次 console.log）

### CORS 限制

和一般的 script 不同，加载 module script 会检查 CORS，所以对于跨域的 module script 必须返回有效的 CORS 请求头。也就是说，你的项目无法直接在本地打开，需要启动服务。

携带凭证：

```html
<script type="module" crossorigin="use-credentials">
	import A from './moduleA.js'
	console.log(A)
</script>
```

