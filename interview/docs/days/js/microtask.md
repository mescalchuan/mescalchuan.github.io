# 宏微任务

#### macro-task队列真实包含任务：
`script(主程序代码),setTimeout, setInterval, setImmediate, I/O, UI rendering`
﻿
#### micro-task队列真实包含任务：  

`process.nextTick, Promises, Object.observe, MutationObserver`

#### 由此我们得到的执行顺序应该为：

`script(主程序代码)—>process.nextTick—>Promises...——>setTimeout——>setInterval——>setImmediate——> I/O——>UI rendering`

#### 例子
~~~js
setTimeout(function(){console.log(1)},0);
﻿
new Promise(function(resolve,reject){
   console.log(2);
   resolve();
}).then(function(){console.log(3)
}).then(function(){console.log(4)});
﻿
process.nextTick(function(){console.log(5)});
﻿
console.log(6);
//输出2,6,5,3,4,1
~~~
﻿
﻿