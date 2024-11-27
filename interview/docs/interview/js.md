# 总结 JS

#### 闭包
如果一个函数的返回值是一个函数，并且该函数内部操作了外部函数变量，则该函数在外部执行时将会生成闭包。
```js
var func = function() {
	var i = 0;
    return function() {
    	i++;
        console.log(i)
    }
}
var f = func();
f(); //1
f(); //2
```
﻿
```js
for(var i = 0; i < 5; i++) {
	setTimeout(function() {
    	console.log(i); //55555
    })
}
﻿
//立即执行函数拥有内部作用域
//或者使用let创建内部作用域
for(var i = 0; i< 5; i++) {
	(function(i) {
    	setTimeout(function() {
        	console.log(i); //01234
        })
    })(i)
}
```
﻿
形成闭包的原因就是函数内部可以访问函数外部的变量，反之不可以，当var f = func()时，其实就是生成了内部函数的引用，使得func和内部函数均没有被销毁，因此f可以一直使用。
﻿
闭包的缺点：引用的存在导致垃圾回收机制不会将其回收。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
﻿
#### 垃圾回收机制
说到闭包，就会说到垃圾回收机制了：
垃圾回收器会周期性的检查是否存在不再使用的变量并回收以释放内存
* 标记清除，标记为进入环境（比如函数内部声明了变量），标记为离开环境（比如函数执行结束）。当垃圾回收机制进行检查的时候，把去除全局变量和闭包，剩下的标记为离开环境的变量删除。
* 引用计数，低版本ie的bom和dom使用该方式。记录每个值被使用的次数，当声明了一个变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值得引用次数减1，当这个值的引用次数变为0的时候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收
﻿
如何解决内存泄露？手动清除
```js
function bindEvent(){
    var obj=document.createElement("XXX");
    obj.onclick=function(){
         //Even if it's a empty function
    }
    obj=null;
}
```
﻿
#### 判断类型
```js
typeof 'str' === 'string'`
'str'.constructor === String
Object.prototype.toString.call('str') === '[object String]'
```
﻿
#### 字符串
```js
substr(a, b)从a开始长度为b
substring(a, b)从a开始到b-1结束，当a>b时ab互换
slice(a, b)同substring，当a>b时直接返回空
```
﻿
typeof 一般只能返回如下几个结果：number,boolean,string,function,object,undefined。
﻿
﻿
#### 跨域
由于浏览器同源策略，凡是发送请求url的协议、域名、端口三者之间任意一与当前页面地址不同即为跨域。跨域的本质时浏览器阻止了用户获取数据，其实后台已经将数据返回给前端了。
﻿
* porxy代理，让后台去请求跨域的服务器，并将结果返回
* CORS跨域资源共享，后端人员在处理请求数据的时候，添加允许跨域的相关操作。
* jsonp，动态插入一个script标签。浏览器对script的资源引用没有同源限制，同时资源加载到页面后会立即执行。
```js
 function testjsonp(data) {
       console.log(data.name); // 获取返回的结果
 }
 var _script = document.createElement('script');
 _script.type = "text/javascript";
 _script.src = "http://localhost:8888/jsonp?callback=testjsonp";
 document.head.appendChild(_script);
```
jsonp的缺点是无法异常处理，我们可以使用定时器检查请求是否异常
﻿
跨域的请求是不会携带cookie的，需要自己设置withCredentials为true并且后台设置白名单（是否该使用类似cookies,authorization headers(头部授权)或者TLS客户端证书这一类资格证书来创建一个跨站点访问控制请求）
﻿
#### 数组去重方法
```js
用一个临时数组和indexof
```
```js
[1,2,3,3].filter((v, i, s) => {return s.indexOf(v) === i})
```
```js
[...new Set(arr)]
```
﻿
window.onload方法是在网页中所有的元素(包括元素的所有关联文件)完全加载到浏览器后才执行的。
﻿
$(document).ready() 方法可以在DOM载入就绪时就对其进行操纵，并调用执行绑定的函数。
﻿
﻿