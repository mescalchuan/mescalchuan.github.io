# Counter

计数器，数字选择框。

```js
this.state = {
    value: 2
}
```

#### 默认值

React

```jsx
<Counter defaultValue = {5} />
```

ReactNative

```jsx
<Counter defaultValue = {5} />
```

#### 最大值、最小值

React

```jsx
<Counter minValue = {10} maxValue = {15} />
```

ReactNative

```jsx
<Counter minValue = {10} maxValue = {15} />
```

#### 步长

React

```jsx
<Counter stepNum = {3} />
```

ReactNative

```jsx
<Counter stepNum = {3} />
```

#### 禁用

React

```jsx
<Counter disabled />
```

ReactNative

```jsx
<Counter disabled />
```

#### 受控

React

```jsx
<Counter value = {this.state.value} onChange = {value => this.setState({value})} stepNum = {2} minValue = {1} maxValue = {9} />
```

ReactNative

```jsx
<Counter value = {this.state.value} onChange = {value => this.setState({value})} stepNum = {2} minValue = {1} maxValue = {9} />
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
defaultValue | 计数器默认值 | number | `null`
value | 计数器的值 | number | `null`
maxValue | 最大值 | number | `99`
minValue | 最小值 | number | `0`
stepNum | 跨度值 | number | `1`
btnWidth `rn only` | 按钮宽度 | number | `35`
containerHeight `rn only` | 总高度 | number | `30`
inputWidth `rn only` | 输入框宽度 | number | `40`
borderColor | 边框颜色 | string | `"#d5d3d3"`
btnColor | 按钮颜色 | string | `"#eeeeee"`
onChange | value发生改变时的回调 | function | `() => {}`
disabled | 是否禁用 | boolean | `false`
getValue() `static` | 外部获取计数值 | function | | 