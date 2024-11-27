# Vue3

3.5+

## 组合式与选项式

* 选项式：同 vue2
* 组合式：
```html
<div @click="increment">{{ count }}</div>
```
```js
import { ref } from 'vue'
export default {
  // `setup` 是一个特殊的钩子，专门用于组合式 API。
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    return {
      count,
      increment
    }
  }
}
```

或

```js
<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => count.value++
</script>
```

## 响应式

### Ref
```html
<div>{{ count }}</div>
```
```js
import { ref } from 'vue'
const count = ref(0)
console.log(count.value)
```

在标准的 JavaScript 中，检测普通变量的访问或修改是行不通的。然而，我们可以通过 getter 和 setter 方法来拦截对象属性的 get 和 set 操作。

```js
// 伪代码，不是真正的实现
const myRef = {
  _value: 0,
  get value() {
    track()
    return this._value
  },
  set value(newValue) {
    this._value = newValue
    trigger()
  }
}
```

Ref 具有深层响应性：

```js
import { ref } from 'vue'

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}
```

### Reactive

与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性，与 ref 不同，js 中不需要 .value：

```js
import { reactive } from 'vue'
const state = reactive({ count: 0 })
console.log(state.count)
```

reactive() 将深层地转换对象：当访问嵌套对象时，它们也会被 reactive() 包装。

<p style="color: red;">局限性：
<ul>
<li>它只能用于对象类型 (对象、数组和如 Map、Set 这样的集合类型)。它不能持有如 string、number 或 boolean 这样的原始类型。</li>
<li>必须保持响应式对象的引用，如果进行整体赋值（替换），将丢失与第一个引用的连接。</li>
<li>解构后将丢失响应式连接。</li>
</ul>
</p>

由于这些限制，建议使用 ref() 作为声明响应式状态的主要 API。

#### 解包细节

* 作为 reactive 对象的属性
一个 ref 会在作为响应式对象的属性被访问或修改时自动解包。
```js
const count = ref(0)
const state = reactive({
  count
})

console.log(state.count) // 0

state.count = 1
console.log(count.value) // 1
```
* 数组和集合的注意事项
与 reactive 对象不同的是，当 ref 作为响应式数组或原生集合类型 (如 Map) 中的元素被访问时，它不会被解包：
```js
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)
```
* 在模板中解包的注意事项
在模板渲染上下文中，只有顶级的 ref 属性才会被解包。
在下面的例子中，count 和 object 是顶级属性，但 object.id 不是：
```js
const count = ref(0)
const object = { id: ref(1) }
console.log(count.value)
console.log(object.id.value) // 必须加value
// 或者将 id 解构为一个顶级属性
const { id } = object
id.value++
```

## 计算属性

返回值为一个计算属性 ref。和其他一般的 ref 类似，你可以通过 publishedBooksMessage.value 访问计算结果。

```js
import { computed } from 'vue'
const auther = reactive({ books: [] })
// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
console.log(publishedBooksMessage.value)
```

### 缓存结果
若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 author.books 不改变，无论多少次访问 publishedBooksMessage 都会立即返回先前的计算结果，而不用重复执行 getter 函数。

### 可写计算属性

```js
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
fullName.value = 'qc'
```

## 条件渲染

<span style="color: red;">v-if 优先级大于 v-for，所以 v-if 中拿不到 v-for 的 item 和 index！</span>

## 列表渲染

如果不想用 div 包裹一个顶级标签，可以用 template 代替（不会产生额外 dom）：
```html
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```

### 数组变化侦测

Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括：
* push()
* pop()
* shift()
* unshift()
* splice()
* sort()
* reverse()

例如 filter()，concat() 和 slice()，这些都不会更改原数组，而总是返回一个新数组。当遇到的是非变更方法时，我们需要将旧的数组替换为新的：
```js
// `items` 是一个数组的 ref
items.value = items.value.filter((item) => item.message.match(/Foo/))
```

## 生命周期

<img src="https://cn.vuejs.org/assets/lifecycle_zh-CN.W0MNXI0C.png" />

## Watch
watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组：
```js
const x = ref(0)
const y = ref(0)

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})
```

但不能直接监听响应式对象的属性值：
```js
const obj = reactive({ count: 0 })
// 错误，因为 watch() 得到的参数是一个 number
watch(obj.count, (count) => {
  console.log(`Count is: ${count}`)
})
```
方案：
```js
// 提供一个 getter 函数
watch(
  () => obj.count,
  (count) => {
    console.log(`Count is: ${count}`)
  }
)
```

### 深层侦听器
直接给 watch() 传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发。
相比之下，一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调：
```js
watch(
  () => state.someObject,
  () => {
    // 仅当 state.someObject 被替换时触发
  }
)
```
显式地加上 deep 选项，强制转成深层侦听器：
```js
watch(
  obj,
  (newValue, oldValue) => {
    
  },
  { deep: true } // 还有 immediate、once(是否一次性调用) 等
)
```

### WatchEffect
```js
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
```

这个例子中，回调会立即执行，不需要指定 immediate: true。在执行期间，它会自动追踪 todoId.value 作为依赖（和计算属性类似）。每当 todoId.value 变化时，回调会再次执行。有了 watchEffect()，我们不再需要明确传递 todoId 作为源值。

* watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。
* watchEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。

### 副作用清理 onWatcherCleanup
注册一个清理函数，在当前侦听器即将重新运行时执行。只能在 watchEffect 作用函数或 watch 回调函数的同步执行期间调用 (即不能在异步函数的 await 语句之后调用)。
```js
import { watch, onWatcherCleanup } from 'vue'
watch(id, (newId) => {
  const { response, cancel } = doAsyncWork(newId)
  // 如果 `id` 变化，则调用 `cancel`，
  // 如果之前的请求未完成，则取消该请求
  onWatcherCleanup(cancel)
})
```

### 回调的触发时机

如果想在侦听器回调中能访问被 Vue 更新之后的所属组件的 DOM，你需要指明 flush: 'post' 选项：
```js
import { watchPostEffect } from 'vue'
watch(source, callback, {
  flush: 'post'
})
watchEffect(callback, {
  flush: 'post'
})
// 或者
watchPostEffect(() => {
  /* 在 Vue 更新后执行 */
})
```

还可以创建一个同步触发的侦听器，它会在 Vue 进行任何更新之前触发：
```js
import { watchSyncEffect } from 'vue'
watch(source, callback, {
  flush: 'sync'
})
watchEffect(callback, {
  flush: 'sync'
})
watchSyncEffect(() => {
  /* 在响应式数据变化时同步执行 */
})
```

### 停止监听
在 setup() 或 script setup 中用同步语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。因此，在大多数情况下，你无需关心怎么停止一个侦听器。

一个关键点是，侦听器必须用同步语句创建：如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。如下方这个例子：
```js
import { watchEffect } from 'vue'
// 它会自动停止
watchEffect(() => {})
// ...这个则不会！
setTimeout(() => {
  watchEffect(() => {})
}, 100)
// 方案
const unwatch = watchEffect(() => {})
unwatch()
```


## 模板引用
```html
<input ref="my-input" />
```
```js
import { useTemplateRef, onMounted } from 'vue'
// 第一个参数必须与模板中的 ref 值匹配
const input = useTemplateRef('my-input')
onMounted(() => {
  input.value.focus()
})
```

v-for 中使用 ref 将返回数组：
```html
<li v-for="item in list" ref="items">
  {{ item }}
</li>
```
```js
import { ref, useTemplateRef, onMounted } from 'vue'
const list = ref([
  /* ... */
])
const itemRefs = useTemplateRef('items')
onMounted(() => console.log(itemRefs.value))
```

### 函数模板引用
除了使用字符串值作名字，ref attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数：
```html
<input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }">
```

### 组件 ref
模板引用也可以被用在一个子组件上。这种情况下引用中获得的值是组件实例：
```js
import { useTemplateRef, onMounted } from 'vue'
import Child from './Child.vue'
const childRef = useTemplateRef('child') // 组件 ref="child"
onMounted(() => {
  // childRef.value 将持有 <Child /> 的实例
})
```

## 组件

### 声明

```js
const props = defineProps(['foo'])
console.log(props.foo)
```

```js
export default {
  props: ['foo'],
  setup(props) {
    // setup() 接收 props 作为第一个参数
    console.log(props.foo)
  }
}
```

### 解构

在计算属性或侦听器中访问 props.foo 时，foo 属性将被跟踪为依赖项。

```js
const { foo } = defineProps(['foo'])
watchEffect(() => {
  // 在 3.5 之前只运行一次
  // 在 3.5+ 中在 "foo" prop 变化时重新执行
  console.log(foo)
})
// 在 3.4 及以下版本，foo 是一个实际的常量，永远不会改变。在 3.5 及以上版本，当在同一个 <script setup> 代码块中访问由 defineProps 解构的变量时，Vue 编译器会自动在前面添加 props.。因此，上面的代码等同于以下代码：
const props = defineProps(['foo'])
watchEffect(() => {
  // `foo` 由编译器转换为 `props.foo`
  console.log(props.foo)
})
```

而在 watch 中：
```js
const { foo } = defineProps(['foo'])
watch(foo, /* ... */)
```

并不会按预期工作，因为它等价于 watch(props.foo, ...)，给 watch 传递的是一个值而不是响应式数据源。

解决方案：

```js
watch(() => foo, /* ... */)
```

支持使用对象绑定多个 prop：
```html
<BlogPost v-bind="post" />
```
```js
const post = {
  id: 1,
  title: 'My Journey with Vue'
}
```

### 单项数据流
所有的 props 都遵循着单向绑定原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。
另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着你不应该在子组件中去更改一个 prop。若你这么做了，Vue 会在控制台上向你抛出警告。

* prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性。在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可：
```js
const counter = ref(props.initialCounter)
```
* 需要对传入的 prop 值做进一步的转换。在这种情况中，最好是基于该 prop 值定义一个计算属性：
```js
const normalizedSize = computed(() => props.size.trim().toLowerCase())
```

当对象或数组作为 props 被传入时，虽然子组件无法更改 props 绑定，但仍然可以更改对象或数组内部的值。
这种更改的主要缺陷是它允许了子组件以某种不明显的方式影响父组件的状态，可能会使数据流在将来变得更难以理解。在最佳实践中，你应该尽可能避免这样的更改，除非父子组件在设计上本来就需要紧密耦合。在大多数场景下，子组件应该抛出一个事件来通知父组件做出改变。

### 事件

依旧可以在 template 中直接使用 $emit。
在 js 中使用 emit 需要利用如下方式：
```js
const emit = defineEmits(['submit'])
const buttonClick = () => emit('submit')
```

```js
export default {
  emits: ['submit'],
  setup(props, ctx) {
    ctx.emit('submit')
  }
}
```

### 双向绑定

和 vue2 不同，子组件不需要接受父组件指定的 prop，也不需要触发 emit 去向上传递变更，而是：
```js
// 子
const model = defineModel()
const update = () => model.value++
```

```html
<!-- 父 -->
 <Child v-model="countModel"/>
```

defineModel 宏可以用来声明一个双向绑定 prop，通过父组件的 v-model 来使用，他做了下面两个操作：
* 一个名为 modelValue 的 prop，本地 ref 的值与其同步。
* 一个名为 update:modelValue 的事件，当本地 ref 的值发生变更时触发。

在底层，这个宏声明了一个 model prop 和一个相应的值更新事件。如果第一个参数是一个字符串字面量，它将被用作 prop 名称；否则，prop 名称将默认为 "modelValue"。在这两种情况下，你都可以再传递一个额外的对象，它可以包含 prop 的选项和 model ref 的值转换选项。

```js
// 声明 "modelValue" prop，由父组件通过 v-model 使用
const model = defineModel()
// 或者：声明带选项的 "modelValue" prop
const model = defineModel({ type: String })

// 在被修改时，触发 "update:modelValue" 事件
model.value = "hello"

// 声明 "count" prop，由父组件通过 v-model:count 使用
const count = defineModel("count")
// 或者：声明带选项的 "count" prop
const count = defineModel("count", { type: Number, default: 0 })

function inc() {
  // 在被修改时，触发 "update:count" 事件
  count.value++
}
```

多个 v-model：
```html
<!-- 子 -->
<input type="text" v-model="firstName" />
<input type="text" v-model="lastName" />
```
```js
// 子
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
```
```html
<!-- 父 -->
<Child v-model:first-name="first" v-model:last-name="last" />
```

### 透传 attributes

```js
defineOptions({
  inheritAttrs: false
})
```

和 vue2 一样，template 中可以直接使用 $attrs

```html
<button class="btn" v-bind="$attrs">Click Me</button>
```

在 js 中，则需要：
```js
import { useAttrs } from 'vue'
const attrs = useAttrs()
```
```js
setup(props, ctx) {
  // 透传 attribute 被暴露为 ctx.attrs
  console.log(ctx.attrs)
}
```

### 依赖注入

```js
import { ref, provide } from 'vue'
const count = ref(0)
provide('rootCount', count)
```
```js
import { inject } from 'vue'
const rootCount = inject('rootCount')
```

同样的，注入的值应当遵循单项数据流：
```js
import { provide, ref } from 'vue'
const location = ref('North Pole')
const updateLocation = () => {
  location.value = 'South Pole'
}
provide('location', {
  location,
  updateLocation
})
```
```js
import { inject } from 'vue'
const { location, updateLocation } = inject('location')
```

确保提供的数据不能被注入方的组件更改，可以使用 readonly() 来包装提供的值：
```js
import { ref, provide, readonly } from 'vue'
const count = ref(0)
provide('read-only-count', readonly(count))
```

### 组合式函数 compose

类似于 mixin，复用相同的逻辑：
```js
// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'
// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
  // 被组合式函数封装和管理的状态
  const x = ref(0)
  const y = ref(0)
  // 组合式函数可以随时更改其状态。
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }
  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  // 通过返回值暴露所管理的状态
  return { x, y }
}
```

```js
import { useMouse } from './mouse.js'
const { x, y } = useMouse()
```

组合再组合：
```js
// event.js
import { onMounted, onUnmounted } from 'vue'
export function useEventListener(target, event, callback) {
  // 如果你想的话，
  // 也可以用字符串形式的 CSS 选择器来寻找目标 DOM 元素
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
```
```js
// mouse.js
import { ref } from 'vue'
import { useEventListener } from './event'
export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })
  return { x, y }
}
```

Mixin：
* 不清晰的数据来源：当使用了多个 mixin 时，实例上的数据属性来自哪个 mixin 变得不清晰，这使追溯实现和理解组件行为变得困难。这也是我们推荐在组合式函数中使用 ref + 解构模式的理由：让属性的来源在消费组件时一目了然。
* 命名空间冲突：多个来自不同作者的 mixin 可能会注册相同的属性名，造成命名冲突。若使用组合式函数，你可以通过在解构变量时对变量进行重命名来避免相同的键名。
* 隐式的跨 mixin 交流：多个 mixin 需要依赖共享的属性名来进行相互作用，这使得它们隐性地耦合在一起。而一个组合式函数的返回值可以作为另一个组合式函数的参数被传入，像普通函数那样。

## Pinia
```js
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```
```js
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
counter.count++
// 自动补全！
counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
counter.increment()
```
## Vite

https://cn.vitejs.dev/guide/why.html