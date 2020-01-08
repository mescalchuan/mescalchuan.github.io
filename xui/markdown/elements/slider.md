# Slider

滑块

```js
this.state = {
    value: 0,
    slider: null
}
```

#### 基本

React

```jsx
<Slider />
```

ReactNative

```jsx
<Slider />
```

#### 宽度

React

```jsx
<Slider width = {600} />
```

ReactNative

```jsx
<Slider width = {300} />
```

> ReactNative width 等于 React width/2，最终二者展示效果相同。

#### 当前进度

React

```jsx
<Slider progress = {50} />
```

ReactNative

```jsx
<Slider progress = {50} />
```

#### 禁用

React

```jsx
<Slider progress = {50} disabled />
```

ReactNative

```jsx
<Slider progress = {50} disabled />
```

#### 受控

React

```jsx
<Slider progress = {this.state.value} onChange = {value => this.setState({value})} />
```

ReactNative

```jsx
<Slider progress = {this.state.value} onChange = {value => this.setState({value})} />
```

#### 自定义样式

React

```jsx
<Slider
    progress = {30}
    minValue = {0}
    maxValue = {99}
    barColor = {'#eeeeee'}
    ballColor = {'#b134e5'}
    crossColor = {'#11b7c0'}
/>
```

ReactNative

```jsx
<Slider
    progress = {30}
    minValue = {0}
    maxValue = {99}
    barColor = {'#eeeeee'}
    ballColor = {'#b134e5'}
    crossColor = {'#11b7c0'}
/>
```

#### 手动获取值

React

```jsx
<Slider ref = {slider => this.slider = slider} />
<br/>
<Button onPress = {() => alert(this.slider.getValue())} >获取</Button>
```

ReactNative

```jsx
<Slider ref = {slider => this.slider = slider} />
<Button onPress = {() => alert(this.slider.getValue())} >获取</Button>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
width | 滑块宽度 | number | `150 => rn`, `300 => h5(px)`
progress | 当前value值 | number | `0`
minValue | 滑块最小值 | number | `0`
maxValue | 滑块最大值 | number | `100`
barColor | 轨道颜色 | string | `"#d5d3d3"`
ballColor | 圆形按钮颜色 | string | `"#108ee9"`
crossColor | 已经过的轨道的颜色 | string | `"#108ee9"`
disabled | 是否禁用 | boolean | `false`
onChange | value发生改变时的回调 | function | `() => {}`
getValue() `static` | 外部获取滑块值 | function | |