# 自定义树形下拉框

在开发 OKR 系统时，需要自己实现树形下拉框组件，原理很简单，用 div 包裹 Input 和 transition 嵌套的 Tree，当 Input 处于 focus 状态时，显示 transition。现在的问题是，如何实现点击其他区域关闭这个 transition？

```html
<div class="dept-tree-container" ref="deptTree">
    <Input v-if="!hideInput" readonly v-model="valueText" :placeholder="placeholder" @on-focus="handleFocus"  @on-clear="handleClear" style="position:relative" clearable/>
    <div v-else class="flex" style="position:relative;cursor:pointer" @click="deptTreeShow = true">
        <p>{{value}}</p>
        <Icon type="md-arrow-dropdown" />
    </div>
    <transition name="fade" v-if="deptTreeShow">
        <div class="dept-tree-panel">
            <Tree :data="newDeptTree" @on-select-change="handleSelect" class="dept-tree"></Tree>
        </div>
    </transition>
</div>
```

#### 方案一

在 transition 中放置一个 Icon，用户点击这个 Icon 关闭下拉框。缺点很明显，体验不好，而且没能真正满足需求。

```html
<div class="dept-tree-container" ref="deptTree">
    <Input v-if="!hideInput" readonly v-model="valueText" :placeholder="placeholder" @on-focus="handleFocus"  @on-clear="handleClear" style="position:relative" clearable/>
    <div v-else class="flex" style="position:relative;cursor:pointer" @click="deptTreeShow = true">
        <p>{{value}}</p>
        <Icon type="md-arrow-dropdown" />
    </div>
    <transition name="fade" v-if="deptTreeShow">
        <div class="dept-tree-panel">
            <Icon type="md-close-circle" class="close-icon" size="16" @click="deptTreeShow = false"/>
            <Tree :data="newDeptTree" @on-select-change="handleSelect" class="dept-tree"></Tree>
        </div>
    </transition>
</div>
```

#### 方案二

监听 Document 的 click 事件，如果 e.path（记录了事件目标以及它的所有上层元素的集合）的元素包含了 `dept-tree-container` 类，说明当前点击事件在 DeptTree 组件内部，否则，说明发生在组件外。

```js
const clickListener = (context, e) => {
    if(context.deptTreeShow) {
        const classes = Array.from(e.path).map(item => item.className)
        if(classes.indexOf('dept-tree-container') == -1) {
            context.deptTreeShow = false
        }
    }
}

mounted() {
    document.removeEventListener('click', clickListener)
    document.addEventListener('click', e => clickListener(this, e))
},
beforeDestroy() {
    document.removeEventListener('click', clickListener)
}
```

问题：当同时存在多个 DeptTree 组件时，点击第一个 A，A 的下拉框展开，点击第二个 B，B 的下拉框展开（A、B 此时都展开），然后点击外部，A、B 同时关闭。

显然，我们最终的目标是：点击 A，A 展开，点击 B，A 关闭，B展开。也就是说，只要你点击了组件的外部（不管这个外部是不是另一个相同的组件），该组件也要关闭。

几经思考，解决方案如下：在组件即将展开之前，把所有的组件先关闭。

```js
created() {
    !window.deptTrees && (window.deptTrees = [])
    window.deptTrees.push(this)
}
methods() {
    handleFocus(e) {
        window.deptTrees.map(item => item.deptTreeShow = false)
        setTimeout(() => {
            this.deptTreeShow = true
        }, 0)
    },
}
```

缺点：window 对象中添加了额外的 element 信息，并且代码不够优雅。

#### 方案三

参考 iview 的 Select 组件实现原理，发现 Select 使用了一个 directive（clickOutside），这个指令负责告诉我们当前点击的事件是否在元素外部。

```html
<div class="dept-tree-container" ref="deptTree" v-click-outside="handleClick">
    ...
</div>
```

```js
directives: {
    clickOutside: {
        bind(el, binding) {
            function documentHandler(e) {
                if(el.contains(e.target)) {
                    return false
                }
                //如果指令绑定了相应的函数，执行它，这里绑定的是handleClick
                if(binding.expression) {
                    binding.value(e)
                }
            }
            el.__vueClickOutside__ = documentHandler
            document.addEventListener('click', documentHandler)
        },
        unbind(el, binding) {
            document.removeEventListener('click', el.__vueClickOutside__)
            delete el.__vueClickOutside__
        }
    }
},
methods: {
    handleClick(e) {
        this.deptTreeShow && (this.deptTreeShow = false)
    }
}
```