# 前端基础

#### 同源与跨域
跨域请求是可以发出去的，服务器也能接收并返回结果，只是请求响应response被浏览器阻止了。
﻿
由于同源策略，跨域的AJAX是不会带上cookie的，如果想带，设置withCredential=true，并要求后台设置白名单。
﻿
防止CSRF的方法就是将token携带到请求参数中。
﻿
后台设置Accsee-Control-Allow-Origin允许哪些网站跨域。
﻿
JSONP的原理：
```js
function getResult(data) {
	document.write(data);
}
<script src="跨域的网站请求路径?callback=getResult"></script>
﻿
//后台
response.writeHead(200, {"Content-Type": "text/javascript"});
response.send(callback+"('"+123+"')");
```
﻿
JSONP需要将回调写在url中，因此只能支持get请求。
﻿
跨域的另一中常用方案是让你的后台做为中转层，它去请求跨域网站再返给你。服务器和服务器之间是不存在跨域一说的。
﻿
#### 上传base64图片
```js
//b64toBlob的实现请参考书p308页
let blob = b64toBlob(base64, "image/png");
formData.append("fileName", blob);
```
﻿
#### 垂直居中
想要垂直居中一个比div小的图片，可以：
```css
.father {
	text-align: center;
}
.father:before {
	content: '';
    vertical-align: middle;
    line-height=father.height;
}
//或者
.father:before {
	content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}
```
﻿
#### 左右固定宽度，中间自适应的三栏布局
```html
<div style="width:100px; float: left">我是左侧</div>
<div style="width:100px; float: right">我是右侧</div>
<div>我是中间</div>
```
﻿
```html
//td会自适应沾满tr的剩余空间，但其默认宽度是内容宽，因此设置一个很大的宽度，放心，再怎么大最终都不会超过table并溢出的。
<div style="width:100px; float: left">我是左侧</div>
<div style="width:100px; float: right">我是右侧</div>
<div style="disply: table-cell; width: 99999px;">我是中间</div>
```
﻿
```html
<div style="display: flex">
	<div style="width:100px;">我是左侧</div>
    <div style="flex=grow: 1;">我是中间</div>
	<div style="width:100px;">我是右侧</div>
</div>
```
﻿
#### 响应式开发
```css
div {
	width: calc((100% - 20px) / 2);
}
```
﻿
#### click
曾经click在移动端会有延迟，这是因为设备要检测你的点击是不是双击，因此增加了延迟。但你添加了`<meta name="viewport" content="width=device-width">`后就不会有这个问题了。也可以说，现在的移动端开发可以不用考虑click迟钝问题了。
﻿
touchstart事件：如果你将click替换成touchstart，那么确实没有延迟，但是当这个dom被滑动时，touchstart也会触发。
﻿
#### 顺序
touchstart --> touchmove --> touchend --> click
﻿
﻿