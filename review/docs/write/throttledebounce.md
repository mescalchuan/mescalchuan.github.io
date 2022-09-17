# 节流与防抖

```js
function throttle(fn, threshhold) {
    var timeout
    var start = new Date;
    var threshhold = threshhold || 160
    return function () {
        var context = this, args = arguments, curr = new Date() - 0
        clearTimeout(timeout)//总是干掉事件回调
        if(curr - start >= threshhold){ 
            console.log("now", curr, curr - start)//注意这里相减的结果，都差不多是160左右
            fn.apply(context, args) //只执行一部分方法，这些方法是在某个时间段内执行一次
            start = curr
        }
        else{
            //让方法在脱离事件后也能执行一次
            timeout = setTimeout(function(){
                fn.apply(context, args) 
            }, threshhold);
        }
    }
}
var mousemove = throttle(function(e) {
    console.log(e.pageX, e.pageY)
});

// 绑定监听
document.querySelector("#panel").addEventListener('mousemove', mousemove);
```


```js
function debounce(func, delay) {
    var timeout;
    return function(e) {
        console.log("清除",timeout,e.target.value)
        clearTimeout(timeout);
        var context = this, args = arguments
        console.log("新的",timeout, e.target.value)
        timeout = setTimeout(function(){
          console.log("----")
          func.apply(context, args);
        },delay)
    };
};

var validate = debounce(function(e) {
    console.log("change", e.target.value, new Date-0)
}, 380);

// 绑定监听
document.querySelector("input").addEventListener('input', validate);
```