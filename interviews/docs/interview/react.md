# React

#### 调用setState后都发生了什么
this.setState并不会立即更新视图，react会触发一个调和过程（状态合并）：将同一事务中的所有setState合并到一个新的对象里，之后批量更新，在更新过程创建新的组件树（virtual dom），组件树之间的比较采用diff算法，计算出节点最小更新范围然后更新ui，在回调函数中可以获取到最新的state，你可以使用函数方式来setState。

#### class与function
函数式编程要求输出结果是纯的，也就是一个输入只能有与之唯一对应的输出，没有外部变量的干扰。react function写法与纯函数相比就是props与渲染结果一一对应，不依赖于组件内部state，所以在function写法中你无法操作state和生命周期。

#### children
props.children不一定是数组，也有可能是undefined和对象（只有一个子节点时），所以map会报错

React.children.map则不会有该问题。

#### 事件机制
React自己封装了一套事件系统（合成事件）以兼容各浏览器，将jsx中所有事件绑定都托挂在document上（包括组件、事件名称、处理函数等），以事件委托的方式在冒泡阶段处理事件。这种委托方式不但优化了性能，还解决了在更新DOM中需要考虑事件监听的问题。

#### diff算法
[http://www.infoq.com/cn/articles/react-dom-diff](http://www.infoq.com/cn/articles/react-dom-diff)

#### 生命周期
[https://www.cnblogs.com/hhhyaaon/p/5807310.html](https://www.cnblogs.com/hhhyaaon/p/5807310.html)