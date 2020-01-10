# HTML5 优化

#### 使用H5的history改善AJAX
比如有一个分页功能，用的ajax，当用户点击浏览器的返回按钮时，返回的不是分页的上一页数据，而是页面的上一个页面了。这里可以使用h5的history进行优化。
﻿
```js
//缓存当前页码
var pageIndex = window.localStorage.pageIndex || 0;
function nextPage() {
	window.localStorage.pageIndex = ++pageIndex;
    requestData(pageIndex);
    //把当前页push到state中，这样浏览器history中就多了当前页
    //三个参数: 页面数据\title（没用）\当前页url
    window.history.pushState({page: pageIndex}, null, window.location.href);
}
//监听用户点击浏览器的前进后退
window.addEventListener("popState", function(event) {
	var page = 0;
    if(event.state != null) {
    	page = event.state.page;
        requestData(page);
        window.localStorage.pageIndex = page;
    }
})
﻿
window.onload=function(){
	var pageIndex = window.localStorage.pageIndex || 0;
    requestData(pageIndex);
}
```
﻿
popState只能监听pushState进去的东西！
﻿
浏览器有一个队列，用来存放访问记录，包括页面的网址还有state数据。这个队列只有pushState了才有数据，否则就没有。
﻿
#### 雪碧图
雪碧图其实就是多个小图片合并在一起，然后调整这张大图的位置来显示不同图片。这种做法能够减少http请求，但缺点就是图片是提前做好的，分辨率是固定的，高清屏会模糊，并且如果想要修改图片的颜色的话就只能重做图片了。我们应该用图标或svg来代替雪碧图。
﻿
#### 图片上传相关
```js
var reader = new FileReader(file);
//读取为base64格式
reader.readAsDataURL(file);
reader.onload = function(e) {
	var base64 = e.target.result;
    if(file.size > 1024) { //背景透明0.5 }
    //如果图片大的话赋值src过程可能会卡一下，这里设置div的透明度告诉用户图片正在处理中来提高体验
    $img.attr("src", base64);
    if(file.size > 1024) { //还原透明度 }
    //后续上传等操作
}
```
﻿
压缩图片可以用canvas，原理就是把一张图片画到一个小画布上，再把画布的内容导出成base64，就能拿到一张很小的图片了。
```js
var ctx = cvs.getContext("2d");
ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
var quality = 0.6;
var newImageData = cvs.toDataURL(mimeType, quality);
var _img = new Image();
_img.src = newImageData;
```
﻿
文件上传进度：
```js
xhr.upload.onprogress = function(e) {
	if(e.lengthComputable) {
    	callback(e.loaded / e.total);
    }
} 
```
﻿
﻿
﻿