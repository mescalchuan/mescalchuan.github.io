# Radio

单选框

```js
this.state = {
    value: 'B'
}
```

> 使用 React 版本时你必须为每一个 Radio 元素指定一个 id，否则无法实现 label 激活的效果。

#### 独立使用

React

```jsx
<Radio id = {'radio_1'} value = {'A'} >A</Radio>
```

ReactNative

```jsx
<Radio value = {'A'} >A</Radio>
```

#### 设置勾选项

React

```jsx
<Radio id = {'radio_2'} value = {'A'} checked = {false} >A</Radio>
<Radio id = {'radio_3'} value = {'B'} checked >B</Radio>
```

ReactNative

```jsx
<Radio value = {'A'} checked = {false} >A</Radio>
<Radio value = {'B'} checked >B</Radio>
```

#### 禁用

React

```jsx
<Radio id = {'radio_4'} value = {'A'} disabled >A</Radio>
```

ReactNative

```jsx
<Radio value = {'A'} disabled >A</Radio>
```

#### 按钮组

React

```jsx
<Radio.Group defaultValue = {'C'} >
    <Radio id = {'radio_5'} value = {'A'} >A</Radio>
    <Radio id = {'radio_6'} value = {'B'} >B</Radio>
    <Radio id = {'radio_7'} value = {'C'} >C</Radio>
</Radio.Group>
```

ReactNative

```jsx
<Radio.Group defaultValue = {'C'} >
    <Radio value = {'A'} >A</Radio>
    <Radio value = {'B'} >B</Radio>
    <Radio value = {'C'} >C</Radio>
</Radio.Group>
```

#### 受控状态

React

```jsx
<Radio.Group value = {this.state.value} onChange = {value => this.setState({value})} >
    <Radio id = {'radio_8'} value = {'A'} >A</Radio>
    <Radio id = {'radio_9'} value = {'B'} >B</Radio>
    <Radio id = {'radio_10'} value = {'C'} >C</Radio>
</Radio.Group>
```

ReactNative

```jsx
<Radio.Group value = {this.state.value} onChange = {value => this.setState({value})} >
    <Radio value = {'A'} >A</Radio>
    <Radio value = {'B'} >B</Radio>
    <Radio value = {'C'} >C</Radio>
</Radio.Group>
```

<br/>



属性 | 说明 | 类型 | 默认值
----|-----|------|------
`Radio.Group` defaultValue | 默认值 | any | `null`
`Radio.Group` value | value --> 受控 | any | `null`
`Radio.Group` onChange | group value更改时的回调，返回当前value | function | `() => {}`
`Radio.Group` disabled | 是否禁用 | boolean | `false`
`Radio.Group` groupStyle | 自定义group容器样式 | object | `{}`
id `h5 only` | radio id `required` | string | `null`
value | radio value | any | `null`
checked | 是否勾选（受控）| boolean | `null`
radioColor `rn only` | radio颜色 | string | `"#ff4f4f"`
radioStyle | 自定义radio样式 | object | `{}`
textStyle | 自定义文本样式 | object | `{}`
disabled | 是否禁用 | boolean | `false`