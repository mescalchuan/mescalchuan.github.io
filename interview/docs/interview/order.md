# 工单

工单：技术分析人员、现场维护人员、工程维修人员、故障管理人员等。页面样式简单，操作几乎相同。因此开始封装组件，
比如table组件，提供最后一列的按钮配置项。
getAngularScope：$('div[ng-controller="listController"]').scope();

分页点击回退按钮回退到上一个页：
点击下一页时pushstate({page: curPage}, title, curUrl)
监听前进后退事件addEventListener("popState", e => {
    请求e.state.page页数据
})
解决f5刷新数据变回第一页：将curPage存入缓存


深入学习了指令
默认继承自父scope
scope=false：子与父共享scope
scope=true：继承父级，创建了新的作用域，子不会影响父
@通过dom属性（字符串）来绑定scope
{}创建隔离作用域，不会继承父作用域，需要自己指定传递的属性
：
@单项绑定
=双向绑定
&绑定函数

脏检查：ui事件、ajax请求、timeout延迟事件会触发脏检查。
每一个绑到ui的数据都会有一个$watch对象（记录上一个值），存入watchList
执行apply函数会触发一轮脏检查$digest，
$digest会调起每一个$watch对象检查值是否一致，一轮循环后继续循环，直到所有值都是新的


setSate:队列机制实现state更新，将新state合并到旧state上，
通过batchUpdate进行批量更新

ie8 ActivexObject ajax、透明度、ie8 ajax请求会缓存，加时间戳来解决、ie8手写trim和map函数


1css代表逻辑像素，手机真实像素为物理像素  dpr=物/逻


[https://www.cnblogs.com/hhhyaaon/p/5807310.html](https://www.cnblogs.com/hhhyaaon/p/5807310.html)

jquery的prop和attr：prop获取标签自带属性，attr获取自定义属性


react-router：onLeave、onEnter、routerWillLeave（跳转前确认）