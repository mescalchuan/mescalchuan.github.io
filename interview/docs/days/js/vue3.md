# Vue 3 学习笔记

### 计算属性

计算属性可以设置 setter

```javascript
computed: {
  fullName: {
    // getter
    get() {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set(newValue) {
      const names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

运行 `vm.fullName = 'John Doe'` 时，setter 会被调用，`vm.firstName` 和 `vm.lastName` 也会相应地被更新。

### 事件处理

事件处理程序中可以有多个方法，这些方法由逗号运算符分隔

```html
<!-- 这两个 one() 和 two() 将执行按钮点击事件 -->
<button @click="one($event), two($event)">
  Submit
</button>
```

### 组件

默认情况下，组件上的 `v-model` 使用 `modelValue` 作为 prop 和 `update:modelValue` 作为事件

```html
<my-component v-model:title="bookTitle"></my-component>
```

```javascript
app.component('my-component', {
  props: {
    title: String
  },
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
  `
})
```

支持绑定多个 v-model

```html
<user-name
  v-model:first-name="firstName"
  v-model:last-name="lastName"
></user-name>
```

```javascript
app.component('user-name', {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName'],
  template: `
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  `
})
```

### 组合式 API

设计初衷：随着业务代码逐渐扩大，data、methods、computed、watch 中存在大量业务逻辑，开发人员需要频繁使用鼠标切换代码区域，开发效率过低：

```javascript
export default {
  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: { 
      type: String,
      required: true
    }
  },
  data () {
    return {
      repositories: [], // 1
      filters: { ... }, // 3
      searchQuery: '' // 2
    }
  },
  computed: {
    filteredRepositories () { ... }, // 3
    repositoriesMatchingSearchQuery () { ... }, // 2
  },
  watch: {
    user: 'getUserRepositories' // 1
  },
  methods: {
    getUserRepositories () {
      // 使用 `this.user` 获取用户仓库
    }, // 1
    updateFilters () { ... }, // 3
  },
  mounted () {
    this.getUserRepositories() // 1
  }
}
```

使用 setup 后，将一个业务逻辑集中至一个代码文件中，在主文件拼装，实现关注点隔离

```javascript
import { toRefs } from 'vue'
import useUserRepositories from '@/composables/useUserRepositories'
import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
import useRepositoryFilters from '@/composables/useRepositoryFilters'

export default {
  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { user } = toRefs(props)

    const { repositories, getUserRepositories } = useUserRepositories(user)

    const {
      searchQuery,
      repositoriesMatchingSearchQuery
    } = useRepositoryNameSearch(repositories)

    const {
      filters,
      updateFilters,
      filteredRepositories
    } = useRepositoryFilters(repositoriesMatchingSearchQuery)

    return {
      // 因为我们并不关心未经过滤的仓库
      // 我们可以在 `repositories` 名称下暴露过滤后的结果
      repositories: filteredRepositories,
      getUserRepositories,
      searchQuery,
      filters,
      updateFilters
    }
  }
}
```

```javascript
// src/composables/useUserRepositories.jsimport { fetchUserRepositories } from '@/api/repositories'import { ref, onMounted, watch } from 'vue'export default function useUserRepositories(user) {  const repositories = ref([])  const getUserRepositories = async () => {    repositories.value = await fetchUserRepositories(user.value)  }  onMounted(getUserRepositories)  watch(user, getUserRepositories)  return {    repositories,    getUserRepositories  }}
```

```javascript
// src/composables/useRepositoryNameSearch.jsimport { ref, computed } from 'vue'export default function useRepositoryNameSearch(repositories) {  const searchQuery = ref('')  const repositoriesMatchingSearchQuery = computed(() => {    return repositories.value.filter(repository => {      return repository.name.includes(searchQuery.value)    })  })  return {    searchQuery,    repositoriesMatchingSearchQuery  }}
```

#### Setup

props 不能解构（破坏响应式），可使用 toRefs 代替

```javascript
import { toRefs } from 'vue'setup(props, context) {  const { title } = toRefs(props) // 不要使用 const { title } = props，获取的 title 不是响应式，父层改变将不会影响这里	// 当 title 为可选的属性时，以上代码一样将不会是响应式，使用 const title = toRefs(props, 'title') 代替  console.log(title.value)}
```

执行 setup 时，组件实例尚未被创建。因此，context 只能访问以下 property：

* props
* attrs
* slots
* emit

setup return 的结果可以直接在模板中使用，且不需要 .value：

``` html
<p>{{ title }}</p>
```

```javascript
import { toRefs } from 'vue'setup(props, context) {  const { title } = toRefs(props)  console.log(title.value)  return {    title  }}
```

#### Ref 和 Reactive

ref 会把参数用 value 包一层

```javascript
console.log(ref(26).value) // 26console.log(ref({ name: 'qc' }).value) // Proxy { name: 'qc' }console.log(ref({ name: 'qc' }).value.name) // 'qc'
```

reactive 不会额外包裹，可直接使用，一旦解构，不再响应，需要用 toRefs

```javascript
console.log(reactive(26)) // 26console.log(reactive({ name: 'qc' })) // Proxy { name: 'qc' }console.log(reactive({ name: 'qc' }).name) // 'qc'
```

解构会导致响应式丢失，用 toRefs 代替：

```javascript
const book = reactive({  author: 'Vue Team',  year: '2020',  title: 'Vue 3 Guide',  description: 'You are reading this book right now ;)',  price: 'free'})let { author, title } = book // 丢失响应式！let { author, title } = toRefs(book) // 保留响应式
```

ref 一般用于定义简单值，reactive 定义复杂值，使用哪个跟习惯也有关，比如习惯定义单个变量的用 ref，习惯用对象全局包裹的用 reactive

