# JS 优化

#### 耦合
不推荐直接在JS里直接修改样式，而是通过增删类的方式修改样式。

#### 减少重复代码
出现重复代码-->封装成函数-->封装成模块-->封装成插件

#### 书写优化
* 定义变量时给它一个初始值，方便JS解释器得知它是什么类型
* 不要随意修改变量的类型
* 函数的返回值应该是确定的，不要一会儿返回number一会儿返回bool
* 不要让代码暴露在全局作用域下，你可以使用立即执行函数代替，也可以用模块化开发

#### ES6的class

```js
function Person(name, age) {
	this.name = name;
    this.age = age;
}
Person.prototype.addAge = () => xxx;
Person.prototype.setName = () => xxx;
```
二者相等

```js
class Person {
	constructor(name, age) {
    	this.name = name;
        this.age = age;
    }
    addAge() { xxx }
    setName(name) { xxx }
}
```