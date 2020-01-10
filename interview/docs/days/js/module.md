# 模块

export 一个单值类型，其他地方将其import，无法进行修改
```js
export const a = 1

import { a } from 'xxx'
a = 2; //报错
```

如果是export一个引用类型，那么不可修改其地址，但可以修改值
```js
export const obj = {
    name: 'a'
}

import { obj } from 'xxx'
obj = {} //报错
obj.name = 'b' //不报错，并且任何导入obj的地方的name都会变成b，也就是说具有全局性
```