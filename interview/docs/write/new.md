# New

```js
function _New() {
  let Constructor = [].shift.call(arguments); // 取出构造函数
  
  let obj = {}   // new 执行会创建一个新对象
  
  obj.__proto__ = Constructor.prototype 
  
  let res = Constructor.apply(obj, arguments)
  return res != null && (typeof res === 'object' || typoof res === 'function') ? res : obj
}
```