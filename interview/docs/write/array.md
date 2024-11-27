# 数组相关

### 数组去重

```js
var result = Array.from(new Set(arr));
var result = [...new Set(arr)];
```

```js
for(var i = 0; i < arr.length - 1; i++) {
	for(var j = i + 1; j < arr.length; j++) {
    	if(arr[j] === arr[i]) arr.splice(j--, 1);
    }
}
console.log(arr);
```

```js
var result = [];
for(var i = 0; i < arr.length; i++) {
	if(result.indexOf(arr[i]) < 0) result.push(arr[i]);
}
console.log(result);
```

```js
[1,2,3,3].filter((v, i, s) => {return s.indexOf(v) === i})
```

### 扁平化

`[1, [2, [3, [4, 5]]], 6] => [1, 2, 3, 4, 5, 6]`

```js
ary = arr.flat(Infinity);
```

```js
ary = str.replace(/(\[|\])/g, '').split(',')
```

```js
str = str.replace(/(\[|\]))/g, '');
str = '[' + str + ']';
ary = JSON.parse(str);
```

```js
//递归实现
let result = [];
let fn = function(ary) {
  for(let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (Array.isArray(ary[i])){
      fn(item);
    } else {
      result.push(item);
    }
  }
}
```

```js
function flatten(ary) {
    return ary.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
}
```

```js
//只要有一个元素有数组，那么循环继续
while (ary.some(Array.isArray())) {
  ary = [].concat(...ary);
}
```

