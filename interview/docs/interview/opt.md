# 总结优化

#### 请说出三种减低页面加载时间的方法
压缩css、js文件
合并js、css文件，减少http请求
外部js、css文件放在最底下
减少dom操作，尽可能用变量替代不必要的dom操作

#### 你所了解到的Web攻击技术
XSS（Cross-Site Scripting，跨站脚本攻击）：指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或者JavaScript进行的一种攻击。

CSRF（Cross-Site Request Forgeries，跨站点请求伪造）：指攻击者通过设置好的陷阱，强制对已完成的认证用户进行非预期的个人信息或设定信息等某些状态更新。

SQL注入攻击

#### web前端开发，如何提高页面性能优化？
1.减少 HTTP 请求 (Make Fewer HTTP Requests)
2.减少 DOM 元素数量 (Reduce the Number of DOM Elements)
3.使得 Ajax 可缓存 (Make Ajax Cacheable)

1.把 CSS 放到代码页上端 (Put Stylesheets at the Top)
2.从页面中剥离 JavaScript 与 CSS (Make JavaScript and CSS External)
3.精简 JavaScript 与 CSS (Minify JavaScript and CSS)
4.避免 CSS 表达式 (Avoid CSS Expressions)
5.使用字体图标代替雪碧图
6.能用css实现的就不要用图片（background-clip: content-box;）

1. 脚本放到 HTML 代码页底部 (Put Scripts at the Bottom)
2. 从页面中剥离 JavaScript 与 CSS (Make JavaScript and CSS External)
3. 精简 JavaScript 与 CSS (Minify JavaScript and CSS)
4. 移除重复脚本 (Remove Duplicate Scripts)

#### css优化
(1)内容和样式分离，易于管理和维护　　(2)减少页面体积　　(3)css文件可以被缓存、重用，维护成本降低　　2、不使用@import　　这条手段已经是众所周知，这里简单提一下，@import影响css文件的加载速度　　3、避免使用复杂的选择器，层级越少越好

