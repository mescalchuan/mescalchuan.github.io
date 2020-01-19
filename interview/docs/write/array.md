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