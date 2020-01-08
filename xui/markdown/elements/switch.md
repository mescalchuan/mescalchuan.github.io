# Switch

开关，用于设置两个相互斥的选项。

```js
this.state = {
    value: false,
    value1: true,
    value2: false
}
```

#### 基本

React

```jsx
<Switch value = {this.state.value} onValueChange = {value => this.setState({value})} />
```

ReactNative

```jsx
<Switch value = {this.state.value} onValueChange = {value => this.setState({value})} />
```

#### 禁用

React

```jsx
<Switch value = {this.state.value1} disabled onValueChange = {value1 => this.setState({value1})} />
```

ReactNative

```jsx
<Switch value = {this.state.value1} disabled onValueChange = {value1 => this.setState({value1})} />
```

#### 自定义颜色

React

```jsx
<Switch
    tintColor = {'gray'}
    onTintColor = {'#f75b25'}
    thumbTintColor = {'#68b1ed'}
    tintBorderColor = {'gray'}
    onTintBorderColor = {'#f75b25'}
    thumbBorderColor = {'#68b1ed'}
    value = {this.state.value2}
    onValueChange = {value2 => this.setState({value2})}
/>
```

ReactNative

```jsx
<Switch
    tintColor = {'gray'}
    onTintColor = {'#f75b25'}
    thumbTintColor = {'#68b1ed'}
    tintBorderColor = {'gray'}
    onTintBorderColor = {'#f75b25'}
    thumbBorderColor = {'#68b1ed'}
    value = {this.state.value2}
    onValueChange = {value2 => this.setState({value2})}
/>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
value | 开关值（true or false）| boolean | `false`
onValueChange | value发生改变时的回调 | function | `() => {}`
onTintColor | 开关打开时背景色 | string | `"#00b247"`
tintColor | 开关关闭时背景色 | string | `"white"`
thumbTintColor | 圆形按钮背景色 | string | `"white"`
onTintBorderColor | 开关打开时边框颜色 | string | `"#eeeeee"`
tintBorderColor | 开关关闭时边框颜色 | string | `"#eeeeee"`
thumbBorderColor | 圆形按钮边框颜色 | string | `"#eeeeee"`