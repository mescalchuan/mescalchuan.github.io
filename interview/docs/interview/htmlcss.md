# HTML + CSS

#### 盒子模型
content、padding、border、margin。4个部分一起构成了css中元素的盒模型。说说ie和w3c的区别，以及box-sizing属性（border-box、padding-box等）
﻿
#### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img
﻿
每个元素都有两个盒子：外在盒子和内在盒子。外在盒子负责元素是否可以一行显示，还是只能换行显示；内在盒子（容器盒子）负责宽高、内容呈现等等。display: block实际由外在的块级盒子和内在的块级容器盒子组成。display: inline-block实际由外在的内联盒子和内在的块级容器盒子组成。display: inline内外均是内联。
﻿
#### 简述一下src与href的区别
href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
﻿
src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。
当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。
﻿
#### 请指出document load和document ready的区别？
ready 事件的触发，表示文档结构已经加载完成（不包含图片等非文字媒体文件）。
onload 事件的触发，表示页面包含图片等文件在内的所有元素都加载完成。
﻿
#### 圣杯布局（左右固定中间自适应）
1. flex
2. margin
```html
<div style="height:100px;background:red;width:100%;float:left;padding:0 100px;box-sizing:border-box">123</div>
<div style="height:100px;background:blue;width:100px;margin-left:-100%;float:left"></div>
<div style="height:100px;background:yellow;width:100px;margin-left:-100px;float:left"></div>
```
﻿
#### CSS中 link 和@import 的区别是？
页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载
﻿
﻿
可继承的样式： font-size font-family color, text-indent;
﻿
不可继承的样式：border padding margin width height ;
﻿
﻿
#### 为什么要初始化CSS样式。
因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
﻿
#### 雪碧图
CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销
﻿
#### 浏览器常用兼容性
1. png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8
2. 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。
3.  IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。解决方案是为float元素的display设置inlineblock
4.  Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.
5. firefox中img默认是inline，因此设置宽高无效，需要手动设置inline-block
6. 
﻿
#### 清除浮动
* clear:both
* bfc，比如overflow hidden
* after: {content:'', clear:both}
﻿
flex >= ie10
﻿
#### BFC
[https://www.cnblogs.com/nujufoul/p/7092520.html](https://www.cnblogs.com/nujufoul/p/7092520.html)