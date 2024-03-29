# 宏微任务

#### macro-task队列真实包含任务：
`script(主程序代码),setTimeout, setInterval, setImmediate, I/O, UI rendering`
﻿
#### micro-task队列真实包含任务：  

`process.nextTick, Promises, Object.observe, MutationObserver`

#### 由此我们得到的执行顺序应该为：

`script(主程序代码)—>process.nextTick—>Promises...——>setTimeout——>setInterval——>setImmediate——> I/O——>UI rendering`

#### 例子
```js
/**
 * 1. 先执行宏任务 setTimeout、new Promise console.log(6)
 * 基于eventloop，setTimeout被放入事件队列中，第一波宏任务执行完毕
 * 2. 执行微任务 process.nextTick（高于promise）、Promise.then
 * 3. 再次执行宏任务，将事件队列中的setTimeout取出
 * */
setTimeout(function(){console.log(1)},0);

new Promise(function(resolve,reject){
   console.log(2);
   resolve();
}).then(function(){console.log(3)
}).then(function(){console.log(4)});

process.nextTick(function(){console.log(5)});

console.log(6);
//输出2,6,5,3,4,1
```

```js
/**
 * 1. 先执行宏任务 start、setTimeout、end
 * 基于eventloop，setTimeout被放入事件队列中，第一波宏任务执行完毕
 * 2. 执行微任务 Promise.then
 * 3. 再次执行宏任务，将事件队列中的setTimeout取出
 * */
console.log('start');
setTimeout(() => {
  console.log('timeout');
});
Promise.resolve().then(() => {
  console.log('resolve');
});
console.log('end');
//输出 start、end、resolve、timeoput
```

```js
/**
 * 1. 先执行宏任务 start，setTimeout
 * 基于eventloop，setTimeout被放入事件队列中，第一波宏任务执行完毕
 * 2. 执行微任务 Promise1，此时有一个setTimeout，将其放入事件队列中
 * 3. 再次执行宏任务，取出setTimeout，打印setTimeout1，宏任务结束
 * 4. 微任务阶段，此时只有一个promise2
 * 5. 宏任务阶段，取出setTimeout，打印setTimeout2
*/
Promise.resolve().then(()=>{
  console.log('Promise1')  
  setTimeout(()=>{
    console.log('setTimeout2')
  },0)
});
setTimeout(()=>{
  console.log('setTimeout1')
  Promise.resolve().then(()=>{
    console.log('Promise2')    
  })
},0);
console.log('start');
//start、Promise1、setTimeout1、Promise2、setTimeout2
```

```js
/**
 * 1. 先执行宏任务 1 setTimeout new Promise setTimeout 10 const promise = new Promise 4
 * 此时已输出 1 5 10 1 2 4，两个 setTimeout 被放入事件队列中，第一波宏任务执行完毕
 * 2. 执行微任务 new Promise.then，输出 6。最下面的 promise.then不会执行，因为在构造时没有resolve或reject，该promise永久pending
 * 3. 执行新一轮宏任务，取出第一个setTimout，输出 2 3
 * 4. 执行微任务，输出 4
 * 5. 执行新一轮宏任务，取出第二个setTimout，输出 7 8
 * 6. 执行微任务，输出 9
 * 有两个坑：最后的promise没有resolve，因此不会走到then；两个setTimout的微任务是隔离的，顺序为
 * setTimout1宏任务-》setTimout1微任务-》setTimout2宏任务-》setTimout2微任务
 * 也可以理解为：主线程宏任务-》主线程微任务-》事件队列事件1宏任务-》事件队列事件1微任务-》事件队列事件2宏任务-》事件队列事件2微任务......
*/
console.log(1)
setTimeout(() => {
    console.log(2)
    new Promise((resolve, reject) => {
        console.log(3)
        resolve()
    }).then(() => {
        console.log(4)
    })
}, 0)
new Promise((resolve, reject) => {
    console.log(5)
    resolve()
}).then(() => {
    console.log(6)
})
setTimeout(() => {
    console.log(7)
    new Promise((resolve, reject) => {
        console.log(8)
        resolve()
    }).then(() => {
        console.log(9)
    })
}, 0)
console.log(10)
const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
//1 5 10 1 2 4 6 2 3 4 7 8 9
//如果你在const promise的console.log(1);console.log(2)后面加个resolve()
//那么结果为 1 5 10 1 2 4 6 3 2 3 4 7 8 9
```