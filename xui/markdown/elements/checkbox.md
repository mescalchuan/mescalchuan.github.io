# Checkbox

多选框

```js
this.state = {
    value: ['B']
}
```

> 使用 React 版本时你必须为每一个 Checkbox 元素指定一个 id，否则无法实现 label 激活的效果。

#### 独立使用

React

```jsx
<Checkbox id = {'checkbox_1'} value = {'A'} >A</Checkbox>
```

ReactNative

```jsx
<Checkbox value = {'A'} >A</Checkbox>
```

#### 设置勾选项

React

```jsx
<Checkbox id = {'checkbox_2'} value = {'A'} checked = {false} >A</Checkbox>
<Checkbox id = {'checkbox_3'} value = {'B'} checked >B</Checkbox>
```

ReactNative

```jsx
<Checkbox value = {'A'} checked = {false} >A</Checkbox>
<Checkbox value = {'B'} checked >B</Checkbox>
```

#### 禁用

React

```jsx
<Checkbox id = {'checkbox_4'} value = {'A'} >A</Checkbox>
<Checkbox id = {'checkbox_5'} value = {'B'} disabled >B</Checkbox>
```

ReactNative

```jsx
<Checkbox value = {'A'} >A</Checkbox>
<Checkbox value = {'B'} disabled >B</Checkbox>
```

#### 按钮组

React

```jsx
<Checkbox.Group defaultValue = {['C']} >
    <Checkbox id = {'checkbox_6'} value = {'A'} >A</Checkbox>
    <Checkbox id = {'checkbox_7'} value = {'B'} >B</Checkbox>
    <Checkbox id = {'checkbox_8'} value = {'C'} >C</Checkbox>
</Checkbox.Group>
```

ReactNative

```jsx
<Checkbox.Group defaultValue = {['C']} >
    <Checkbox value = {'A'} >A</Checkbox>
    <Checkbox value = {'B'} >B</Checkbox>
    <Checkbox value = {'C'} >C</Checkbox>
</Checkbox.Group>
```

#### 受控状态

React

```jsx
<Checkbox.Group value = {this.state.value} onChange = {value => this.setState({value})} >
    <Checkbox id = {'checkbox_9'} value = {'A'} >A</Checkbox>
    <Checkbox id = {'checkbox_10'} value = {'B'} >B</Checkbox>
    <Checkbox id = {'checkbox_11'} value = {'C'} >C</Checkbox>
</Checkbox.Group>
```

ReactNative

```jsx
<Checkbox.Group value = {this.state.value} onChange = {value => this.setState({value})} >
    <Checkbox value = {'A'} >A</Checkbox>
    <Checkbox value = {'B'} >B</Checkbox>
    <Checkbox value = {'C'} >C</Checkbox>
</Checkbox.Group>
```

> Checkbox 的 disabled 和 checked 只有在脱离 group 下才有效。

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
`Checkbox.Group` defaultValue | 默认value | any | `null`
`Checkbox.Group` value | value（受控）| any | `null`
`Checkbox.Group` onChange | 多选框勾选值发生改变时的回调，将会返回新的勾选值 | function | `() => {}`
`Checkbox.Group` disabled | 是否禁用 | boolean | `false`
`Checkbox.Group` groupStyle | 自定义group容器样式 | object | `{}`
id `h5 only` | checkbox id `required` | string | `null`
value | checkbox value | any | `null`
checked | 是否勾选（受控）| boolean | `null`
checkboxColor `rn only` | 颜色 | string | `#ff4f4f`
checkboxStyle | 自定义样式 | object | `{}`
textStyle | 自定义文本样式 | object | `{}`
disabled | 是否禁用 | boolean | `false`
onChange | 每次点击时的回调，返回勾选状态（bool） | function | `() => {}`