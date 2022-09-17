# 常见问题

### 1. forEach 可以使用 async 吗？有什么问题？

答：forEach 只支持同步代码，Polyfill 版本类似于：

```js
while (index < arr.length) {
  callback(item, index)   //也就是我们传入的回调函数
}
```
forEach 只是简单的执行了下回调函数而已，并不会去处理异步的情况。 并且你在 callback 中即使使用 break 也并不能结束遍历。
也可以理解为：在 forEach 中对使用的每一个回调函数使用 async，就变成每一个循环都是一个独立的异步函数了，所以各自去执行了，就变成非串行了。

解决方案：一般来说解决的办法有 2 种，for...of 和 for 循环。for...of 内部处理的机制和 forEach 不同，forEach 是直接调用回调函数，for...of 是通过迭代器的方式去遍历。

### 2. this 指向问题

```js
var label = 'Keep'

var obj1 = {
    label: 'Fe',
    getLabel: function() {
        return function() {
            console.log('Fe: ' + this.label)
        }
    }
}
//Fe: Keep
obj1.getLabel()

var obj2 = {
    label: 'Server',
    getLabel: function() {
        return () => console.log('Server: ' + this.label)
    }
}
obj2.getLabel()()
//Server: Server

var obj3 = {
    label: 'Android',
    getLabel: () => function() {
        console.log('Android: ' + this.label)
    }
}
obj3.getLabel()()
//Android: Keep

var obj4 = {
    label: 'Ios',
    getLabel: () => () => console.log('Ios: ' + this.label)
}
obj4.getLabel()()
//Ios: Keep
```

答：`obj1.getLabel()` 执行后，this 指向了 window（隐式绑定），再次执行函数时，输出 `window.label`。 `obj2.getLabel()` 执行后，this 指向了 window，但内部的箭头函数由于定义时的父级上下文为 obj2，因此 this 依旧为 obj2。`obj3.getLabel` 是箭头函数，在定义时 this 就指向了父级 window，之后再执行时，同 obj1。`obj4.getLabel` 为箭头函数，同 obj3，而内部的函数依旧为箭头函数，指向 `obj3.getLabel` 为 window。

### 3. typeof null 为什么是 object
答：一个值由两个部分表示，类型和具体值。对象的类型为0，null在大多数浏览器上的表达为0x00，因此符合对象标准。

### 4. ['1', '2', '3'].map(parseInt) 的输出结果是什么？['1', '2', '3'].filter(parseInt) 的输出结果是什么？
答：parseInt 的第二个参数为数组的解析基数（进制数），在这里，map 的第二个参数 index 就是基数。[1, NaN, NaN]
* parseInt('1', 0)：radix 的值为 0，判断字符串发现介于 1~9，用 10 进制转换，结果为 1。
* parseInt('2', 1)：radix 的值为 1，如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
* parseInt('3', 2)：radix 的值为 2，这就意味着字符串将被解析成字节数，也就是仅仅包含数值 0 和 1。parseInt 的规范指出，它仅尝试分析第一个字符的左侧。这个字符串的第一个字符是 3，它并不是基础基数 2 的一个有效数字。所以这个子字符串将被解析为空。如果子字符串被解析成空了，函数将返回为 NaN。

parseFloat 没有第二个参数，所以返回的就是 1 2 3。[1, 2, 3]

同上，parseInt 的三个结果只有第一个是 1（符合true），其他全是 NaN，导致 filter 把后两项全过滤掉了，因此返回 ['1']

parseFloat 没有第二个参数，原样返回，每个元素都不会被过滤。['1', '2', '3']

### 5. JSON.parse(JSON.stringify()) 深拷贝的局限性
答：
1. undefined、函数、symbol 值，会被忽略（不在新对象中）
2. Date 日期调用了 Date.toISOString() 将其转换为了字符串
3. NaN、Infinity、null 都会被当做 null
4. 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性
5. 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误