# Search

搜索框，一般放置于头部导航下方，用于搜索信息，支持弹出层。

```js
this.state = {
    value: '受控'
}
```

#### 基本

React

```jsx
<Search placeholder = {'输入任何内容'} />
```

ReactNative

```jsx
<Search placeholder = {'输入任何内容'} />
```

#### 「取消」常显

React

```jsx
<Search placeholder = {'「取消」常显'} showCancelButton />
```

ReactNative

```jsx
<Search placeholder = {'「取消」常显'} showCancelButton />
```

#### 自定义取消文本

React

```jsx
<Search placeholder = {'自定义取消文本'} showCancelButton cancelText = {'关闭'} />
```

ReactNative

```jsx
<Search placeholder = {'自定义取消文本'} showCancelButton cancelText = {'关闭'} />
```

#### 显示模态框

React

```jsx
<Search placeholder = {'显示模态框'} showModal />
```

ReactNative

```jsx
<Search placeholder = {'显示模态框'} showModal />
```

#### 自定义模态框组件

React

```jsx
<Search
    placeholder = {'自定义模态框组件'}
    showModal
    modalComponent = {<p style = {{fontSize: '0.4rem'}} >这里显示自定义内容</p>}
/>
```

ReactNative

```jsx
<Search
    placeholder = {'自定义模态框组件'}
    showModal
    modalComponent = {<Text style = {{fontSize: 15}} >这里显示自定义内容</Text>}
/>
```

#### 禁用

React

```jsx
<Search placeholder = {'禁用'} disabled />
```

ReactNative

```jsx
<Search placeholder = {'禁用'} disabled />
```

#### 默认值

React

```jsx
<Search defaultValue = {'默认值'} />
```

ReactNative

```jsx
<Search defaultValue = {'默认值'} />
```

#### 受控

React

```jsx
<Search value = {this.state.value} onChange = {value => this.setState({value})} />
```

ReactNative

```jsx
<Search value = {this.state.value} onChange = {value => this.setState({value})} />
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
defaultValue | 默认值 | string | `""`
value | value（受控）| string | `""`
placeholder | 提示信息 | string | `"搜索"`
cancelText | “取消”按钮的文本 | string | `"取消"`
touchableOpacity `rn only` | 触摸透明度 | number | `0.8`
onChange | 搜索框内容发生改变时触发 | function | `() => {}`
onSubmit | 提交时触发 | function | `() => {}`
onFocus | 聚焦时触发 | function | `() => {}`
onBlur | 失焦时触发 | function | `() => {}`
onCancel | 点击“取消”时触发 | function | `() => {}`
showModal | 是否启动modal模式 | boolean | `false`
showCancelButton | 是否始终显示“取消”按钮 | boolean | `false`
disabled | 是否禁用 | boolean | `false`
modalComponent | 如果开启了modal模式，使用该属性定义Modal组件内的子元素 | element | `null`