# Header

头部导航

#### 基本

React

```jsx
<Header title = {'导航栏'} />
```

ReactNative

```jsx
<Header title = {'导航栏'} />
```

#### 左侧按钮

React

```jsx
<Header
    title = {'导航栏'}
    leftBtn = {<Icon name = {'ios-arrow-back'} color = {'white'} />}
/>
```

ReactNative

```jsx
<Header
    title = {'导航栏'}
    leftBtn = {<Icon name = {'ios-arrow-back'} color = {'white'} />}
/>
```

#### 右侧按钮

React

```jsx
<Header
    title = {'导航栏'}
    rightBtn = {<span style = {{fontSize: '0.35rem', color: 'white'}} >更多</span>}
/>
```

ReactNative

```jsx
<Header
    title = {'导航栏'}
    rightBtn = {<Text style = {{fontSize: 13.125, color: 'white'}} >更多</Text>}
/>
```

#### 自定义样式

React

```jsx
<Header
    title = {'导航栏'}
    containerStyle = {{backgroundColor: '#01DD9B'}}
    leftBtn = {<Icon name = {'ios-arrow-back'} color = {'white'} />}
    rightBtn = {<span style = {{fontSize: '0.35rem', color: 'white'}} >更多</span>}
/>
```

ReactNative

```jsx
<Header
    title = {'导航栏'}
    containerStyle = {{backgroundColor: '#01DD9B'}}
    leftBtn = {<Icon name = {'ios-arrow-back'} color = {'white'} />}
    rightBtn = {<Text style = {{fontSize: 13.125, color: 'white'}} >更多</Text>}
/>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
containerStyle | 容器样式 | object | `{}`
title | 标题 | string | `""`
titleStyle | 标题样式 | object | `{}`
leftBtn | 自定义左侧按钮 | element | `null`
rightBtn | 自定义右侧按钮 | element | `null`