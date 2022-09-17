# Angular

#### mvvm
![](http://thumbsnap.com/i/VeSX9sNM.png?0804)

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