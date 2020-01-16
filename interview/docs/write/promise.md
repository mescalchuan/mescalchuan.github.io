# Promise

```js
function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    function resolve(value){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
       }
    }
    function reject(reason){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}
myPromise.prototype.then=function(onFullfilled,onRejected){
   let self=this;
   switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:       
   }
}
```

### All

```js
Promise.all = function(promises) {
    return new Promise(function(resolve, reject) {
        var resolvedCounter = 0
        var promiseNum = promises.length
        var resolvedValues = new Array(promiseNum)
        for (var i = 0; i < promiseNum; i++) {
            (function(i) {
                Promise.resolve(promises[i]).then(function(value) {
                    resolvedCounter++
                    resolvedValues[i] = value
                    if (resolvedCounter == promiseNum) {
                    return resolve(resolvedValues)
                    }
                }, function(reason) {
                    return reject(reason)
                })
            })(i)
        }
    })
}
```

### Race

```js
Promise.race = function(promises) {
    return new Promise(function(resolve, reject) {
        for (var i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(function(value) {
                return resolve(value)
            }, function(reason) {
                return reject(reason)
            })
        }
    })
}
```