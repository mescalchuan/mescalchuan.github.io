# Button

按钮，支持块级、内联级、全填充、边框填充、大小等设置。

#### 默认

React

```jsx
<Button>默认</Button>
```

ReactNative

```jsx
<Button>默认</Button>
```

#### 行内按钮

React

```jsx
<Button inline >行内按钮</Button>
```

ReactNative

```jsx
<Button inline >行内按钮</Button>
```

#### 背景色

React

```jsx
<Button buttonColor = {'#ff4f4f'} >背景色</Button>
```

ReactNative

```jsx
<Button buttonColor = {'#ff4f4f' } >背景色</Button>
```

#### 自定义样式

React

```jsx
<Button buttonStyle = {{backgroundColor: '#3eaf7c', borderColor: '#3eaf7c'}} >自定义样式</Button>
```

ReactNative

```jsx
<Button buttonStyle = {{backgroundColor: '#3eaf7c', borderColor: '#3eaf7c'}} >自定义样式</Button>
```

#### 大小

React

```jsx
<Button inline size = {BUTTON_SIZE.SMALL} buttonStyle = {{marginRight: '0.2rem'}} >小按钮</Button>
<Button inline size = {BUTTON_SIZE.MIDDLE} buttonStyle = {{marginRight: '0.2rem'}} >中按钮</Button>
<Button inline size = {BUTTON_SIZE.BIG} >大按钮</Button>
```

ReactNative

```jsx
<Button inline size = {BUTTON_SIZE.SMALL} buttonStyle = {{marginRight: 7.5}} >小按钮</Button>
<Button inline size = {BUTTON_SIZE.MIDDLE} buttonStyle = {{marginRight: 7.5}} >中按钮</Button>
<Button inline size = {BUTTON_SIZE.BIG} >大按钮</Button>
```

#### 幽灵按钮

React

```jsx
<Button type = {BUTTON_TYPE.GHOST} >幽灵按钮</Button>
```

ReactNative

```jsx
<Button type = {BUTTON_TYPE.GHOST} >幽灵按钮</Button>
```

#### 文本样式

React

```jsx
<Button textStyle = {{color: '#333'}} >文本样式</Button>
```

ReactNative

```jsx
<Button textStyle = {{color: '#333'}} >文本样式</Button>
```

#### 禁用

React

```jsx
<Button disabled >禁用</Button>
```

ReactNative

```jsx
<Button disabled >禁用</Button>
```

#### 图标

React

```jsx
<Button icon = {<Icon name = {'ios-add'} color = {'white'} />} >图标</Button>
```

ReactNative

```jsx
<Button icon = {<Icon name = {'ios-add'} color = {'white'} />} >图标</Button>
```

#### 触摸函数

React

```jsx
<Button onPress = {() => alert('click')} >触摸函数</Button>
```

ReactNative

```jsx
<Button onPress = {() => alert('click')} >触摸函数</Button>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
activeOpacity `rn only` | 按钮点击时的按钮透明度 | number | `0.6`
inline | 是否是行内按钮 | boolean | `false`
buttonColor | 按钮背景色 | string | `"#ff4f4f"`
buttonStyle | 自定义按钮样式 | object | `{}`
size | 按钮大小 | BUTTON_SIZE| `BUTTON_SIZE.MIDDLE`
type | 按钮类型 | BUTTON_TYPE| `BUTTON_TYPE.FILL`
textStyle | 文本样式 | object | `{}`
disabled | 是否禁用 | boolean | `false`
loading `rn only` | 是否显示loading圈 | boolean | `false`
loadingColor `rn only` | loading圈的颜色 | string | `"white"`
icon | 按钮小图标, 如果loading为true，则icon无效 | element | `null`
onPress | 触摸函数 | function | `() => {}` 