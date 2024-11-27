# 前端与计算机基础


#### 数组去重
```js
var result = Array.from(new Set(arr));
```
﻿
```js
for(var i = 0; i < arr.length - 1; i++) {
	for(var j = i + 1; j < arr.length; j++) {
    	if(arr[j] === arr[i]) arr.splice(j--, 1);
    }
}
console.log(arr);
```
﻿
```js
var result = [];
for(var i = 0; i < arr.length; i++) {
	if(result.indexOf(arr[i]) < 0) result.push(arr[i]);
}
console.log(result);
```
﻿
#### 函数节流（不想让函数触发太快）
resize\mousemove\scroll等函数，不希望触发太快，最好隔一阵子才触发。
﻿
```js
throttling(func, time) {
	//第一次则立即执行
	if(typeof func.id === undefined) {
    	func.id = 0;
        func();
        return
    }
    //之后每次都是定时器结束后才执行
    if(!func.id) {
    	func.id = setTimeout(() => {
        	func();
            func.id = 0
        }, time)
    }
}
﻿
$(window).on("resize", function() {
	throttling(someFunc, 500);
});
```
﻿
﻿
#### 函数防抖
```js
function _debounce(fn,wait,time){
    var previous = null; //记录上一次运行的时间
    var timer = null;
﻿
    return function(){
        var now = +new Date();
﻿
        if(!previous) previous = now;
        //当上一次执行的时间与当前的时间差大于设置的执行间隔时长的话，就主动执行一次
        if(now - previous > time){
            clearTimeout(timer);
            fn();
            previous = now;// 执行函数后，马上记录当前时间
        }else{
            clearTimeout(timer);
            timer = setTimeout(function(){
                fn();
            },wait);
        }
    }
}
function _log(){
    console.log(1)
}
window.onscroll = _debounce(_log,500,2000)
```
函数防抖是只执行重复操作的最后一次（当调用动作过n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间），而节流是每多少单位时间内只执行一次（预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期）。