# 柯里化

### 什么是函数柯里化
在一个函数中首先填充几个参数(然后再返回一个新函数)的技术称为柯里化(Currying)。柯里化通常也称部分求值，其含义是给函数分步传递参数，每次传递参数后部分应用参数，并返回一个更具体的函数接受剩下的参数，这中间可嵌套多层这样的接受部分参数函数，直至返回最后结果。

#### 问题
要实现一个这样的加法函数，使得：
```js
add(1,2,3)(1)(2)(3)(4,5,6)(7,8)() === 42
```
首先，可以看到，这个函数，只有当参数为空的时候，才执行之前所有数值的加法，这样的嵌套可以无限进行，当有参数的时候，add(1,2,3)，这个时候的返回值应该是一个函数，这个函数存储了1,2,3但是没有执行加法（执行了也行，此处假设就不执行，只是起到保存参数的作用），这样，继续执行add(1,2,3)(2)()就能输出1+2+3+2=8。
要实现这样的一个函数，首先，返回值在参数不为空的时候必定返回一个函数，该函数还保存了之前的参数，这就需要用到闭包。

```js
// add 函数柯里化
function add(){
    //建立args,利用闭包特性，不断保存arguments
    var args = [].slice.call(arguments);
    var _add = function(){
        if(arguments.length === 0){
            //参数为空，对args执行加法
            return args.reduce(function(a,b){return a+b});
        }else {
            //否则，保存参数到args，返回一个函数
            [].push.apply(args,arguments);
            return _add;
        }
    }
    //返回_add函数
    return _add;
}
```

#### 通用的函数来对普通函数进行柯里化
```js
//  通用的函数柯里化构造方法
function curry(func){
    //新建args保存参数，注意，第一个参数应该是要柯里化的函数，所以args里面去掉第一个
    var args = [].slice.call(arguments,1);
    //新建_func函数作为返回值
    var _func =  function(){
        //参数长度为0，执行func函数，完成该函数的功能
        if(arguments.length === 0){
            return func.apply(this,args);
        }else {
            //否则，存储参数到闭包中，返回本函数
            [].push.apply(args,arguments);
            return _func;
        }
    }
    return _func;
}

function add(){
    return [].reduce.call(arguments,function(a,b){return a+b});
}
console.log(curry(add,1,2,3)(1)(2)(3,4,5,5)(5,6,6,7,8,8)(1)(1)(1)());//69
```

#### 题外话
实现数组扁平化：`var arr = [1,[2],[3,[4,5]],[6,[7,[8,9]]]]`
* arr.toString() -> "1,2,3,4,5,6,7,8,9"
* arr.flat(Infinity).toString() -> [1,2,3,4,5,6,7,8,9].toString() -> "1,2,3,4,5,6,7,8,9"，其中，参数代表遍历的深度，如果是1的话，则是[1,2,3,[4,5],6,[7,[8,9]]]，如果是2的话，则是[1,2,3,4,5,6,7,[8,9]]