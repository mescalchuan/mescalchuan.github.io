# 响应式 web 设计实战

浏览器中用于呈现网页的区域叫视口（viewport）。视口通常并不等于屏幕大小（用户可以缩放）。
```html
//按照设备宽度来渲染页面
<meta name="viewport" content="width=device-width"/>

```
```css
/*图片随屏幕宽度的改变而自适应*/
img {
	max-width: 100%;
    height: auto;
}
```

```html
<!--媒体查询-->
@media screen and (min-width: 50em) {
	/*样式*/
}

<!--not具有最高优先级-->
<link rel="stylesheet" media="not screen and (orientation: portrait)  and (min-width: 800px)" href="xxx.css"/>

<!--尽量不要使用@import，这会增加http请求-->
<style>
@import url("xxx.css") screen and (max-width: 360px);
</style>

<!--针对高分辨率的媒体查询-->
<!--2dppx：每个像素有两个像素点-->
@media (min-resolution: 2dppx)
```

link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。除了@media之外，剩下的两种适配方式均会将所有css文件下载，然后才根据屏幕大小做适配。

```html
<!--手机浏览器以百分百的视口宽度渲染页面，把内容放大为实际大小，禁止用户缩放-->
<media name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no"/>
```

css3选择符
```css
/*匹配标签和属性*/
img[alt] {}
img[alt="message"] {}
img[alt^="mes"] {} /*以xxx开头*/
img[alt$="age"] {} /*以xxx结尾*/
img[alt*="ss"] {} /*包含xxx（xxx是字符串，注意和~=的区别）*/
[data-file^="file"] {} /*只匹配属性*/
[title=qinchuan] {} /*包含qinchuan这个单词，qinchuan必须是一个完整的单词*/
```

```css
div:last-child {}
div:first-child {}
div:nth-child(odd\even\n(从1开始)) {}
div:nth-last-child(n) {} /*从倒数第n个开始往后匹配*/
```

```css
div:not(.not-me) {} /*div中没有.not-me类的元素的样式*/
div:empty {} /*内容为空时的样式*/
p:first-line {} /*第一行样式*/
```

* vw：视口宽度
* vh：视口高度
* vmin：min(vw, vh)
* vmax：max(vw, vh)

尽量避免使用css3中的滤镜，它会影响渲染性能。

建议从最小的屏幕尺寸开始设计，渐渐地使视口尺寸增大。
从选择支持的浏览器中选取共有子集开始编写代码（html、css、js），然后逐步优化代码以适应那些比较强大的浏览器和设备，这就是渐进增强。平稳退化正好与之相反。一般情况下都是渐进增强的开发方式。

```css
input { appearance: none; } /*清除表单元素在浏览中的默认样式*/
```