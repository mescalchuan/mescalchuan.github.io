# 移动端开发

#### 概念
物理像素：设备像素，代表着手机屏幕上有多少个小格子
设备独立像素：css中的1px，经转换变成物理像素
设备像素比：物理/设备独立（dpr）
﻿
一般屏下1独立等于1物理，而高清下（2）1独立等于4物理。
﻿
以iphone6为例，1px原本对应1物理，在iphone6下1px对应4物理，我们在css里设置的1px到iphone上并不是1px，而是2px，因此可以用initial-scale将页面缩小一倍，让1px真正等于1px。
﻿
#### 1px像素问题
刚刚说了，高清屏下的css1px最终在手机上并不是1px，我们可以通过initial-scale=0.5或者利用css3的transform:scale(0.5)解决。
﻿
flexible的原理
```js
if (!dpr && !scale) { 
    var isAndroid = win.navigator.appVersion.match(/android/gi); 
    var isIPhone = win.navigator.appVersion.match(/iphone/gi); 
    var devicePixelRatio = win.devicePixelRatio; 
    if (isIPhone) { 
    // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案 
        if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) { 
            dpr = 3; 
        } 
        else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){ dpr = 2; } 
        else { dpr = 1; } 
    } 
    else { 
        // 其他设备下，仍旧使用1倍的方案 
        dpr = 1; 
    }
    scale = 1 / dpr; 
}
```
﻿
```js
var metaEl = doc.createElement('meta'); 
var scale = 1 / dpr; 
metaEl.setAttribute('name', 'viewport'); 
metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no'); 
```
```js
var width = docEl.getBoundingClientRect().width;
if (width / dpr > 540) {
    width = 540 * dpr;
}
var rem = width / 10;
docEl.style.fontSize = rem + 'px';
flexible.rem = win.rem = rem;
```
﻿
#### 关于font-size
﻿
字体不用rem，而是根据像素比调整
```css
//data-dpr属性是flexible自己在html中添加的属性
font-size: 10px;
[data-dpr="2"] { font-size: 20px; }
[data-dpr="3"] { font-size: 30px; }
```
﻿
﻿
#### 兼容性问题
ios上滚动卡顿（手指离开时立即停止了滚动）：
可以设置 -webkit-overflow-scrolling： touch，但是在ios上存在bug（底部fixed与内容黏动）
```css
//解决方案
<body>
<div id="top">固定在顶部</div>
<div id="content">中间内容带滚动条</div>
<div id="bottom">固定在底部</div>
</body>
﻿
#header{
  width: 100%;
  height: 50px;
  background-color: red;
  position: fixed;
  top: 0;
}
#footer{
  width: 100%;
  height: 50px;
  background-color: red;
  position: fixed;
  bottom: 0;
}
#content {
  margin: 50px 0;
}
body {
  -webkit-overflow-scrolling:touch
}
!!content不设置高度，内容自己撑开
```
﻿
弹出层出现后阻止外层滚动，一般的做法是body为overflow:hidden，之后visible。但是在手机端是无效的。
```js
//解决方案，将想要阻止的滚动层设为fixed，并且记录其当前的滚动位置，弹框关闭后重置为static并滚动到刚刚记录的位置
this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
document.body.style.position='fixed';
document.body.style.top=-this.scrollTop+'px';
﻿
document.body.style.position='';
document.body.style.top='';
document.body.scrollTop = document.documentElement.scrollTop = this.scrollTop;
```
﻿
```html
<input type="file" accept="image/*" capture="camera" multiple/>在ios上直接打开相机，在安卓上可以选择图片或打开相机
﻿
<input type="file" accept="image/*" multiple/>在ios上可以选择图片或打开相机，在安卓上没有相机选项
```
﻿
点击bug：
在iOS中，当委托给一个元素添加click事件时，如果事件是委托到 document 或 body 上，并且委托的元素是默认不可点击的(如 div, span 等)，此时 click 事件会失效。
﻿
```js
//解决方案
将 click 元素委托到非 document 或 body 的父级元素上
```
﻿
ios click 300ms延迟：
原因是为了区分究竟是点击事件还是双击事件
```js
//解决方案
//1和2在safari上均不可以，因此还要禁用双击滚动
1. <meta name="viewport" content="user-scalable=no">
2. <meta name="viewport" content="width=device-width">
3. fastclick库：FastClick 在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即触发一个模拟click 事件，并把浏览器在 300 毫秒之后真正触发的 click 事件阻止掉。
```
﻿
iphone和ipad上input框默认有内阴影：
-webkit-appearance:none;
﻿
ios输入框默认首字母大写：
<input type="text"autocapitalize="off"/>
﻿
﻿