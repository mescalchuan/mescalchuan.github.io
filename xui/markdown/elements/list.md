# List

列表，用于数据列表展示、基本内容呈现。

#### 基本

React

```jsx
<List title = {'基本'} />
```

ReactNative

```jsx
<List title = {'基本'} />
```

#### 显示分割线

React

```jsx
<List title = {'显示分割线'} showLine />
```

ReactNative

```jsx
<List title = {'显示分割线'} showLine />
```

#### 显示右侧箭头

React

```jsx
<List showLine title = {'显示右侧箭头'} showRightIcon />
```

ReactNative

```jsx
<List showLine title = {'显示右侧箭头'} showRightIcon />
```

#### 控制左右内容的对齐方式

React

```jsx
<List
    title = {'控制左右内容的对齐方式'}
    leftContent = {<div style = {{width: '0.5rem', height: '0.5rem', borderRadius: '0.5rem', backgroundColor: '#68b1ed', marginRight: '0.3rem'}} ></div>}
    rightContent = {<span style = {{fontSize: '0.3rem'}} >12:00</span>}
    rightContentFlex = {'flex-start'}
    showLine
>
    <p style = {{fontSize: '0.3rem'}} >左侧内容居中于List</p>
    <p style = {{fontSize: '0.3rem'}} >右侧内容上对齐于List</p>
</List>
```

ReactNative

```jsx
<List
    title = {'控制左右内容的对齐方式'}
    leftContent = {<View style = {{width: 18.75, height: 18.75, borderRadius: 18.75, backgroundColor: '#68b1ed', marginRight: 11.25}} ></View>}
    rightContent = {<Text style = {{fontSize: 11.25}} >12:00</Text>}
    rightContentFlex = {'flex-start'}
    showLine
>
    <Text style = {{fontSize: 11.25}} >左侧内容居中于List</Text>
    <Text style = {{fontSize: 11.25}} >右侧内容上对齐于List</Text>
</List>
```

#### 右侧内容布局下对齐

React

```jsx
<List 
    title = {'右侧内容布局下对齐'} 
    leftContent = {<div style = {{width: '0.5rem', height: '0.5rem', borderRadius: '0.5rem', backgroundColor: '#68b1ed', marginRight: '0.3rem'}} ></div>}
    rightContent = {<span style = {{fontSize: '0.3rem'}} >12:00</span>}
    rightContentFlex = {'flex-end'}
    showLine
>
    <p style = {{fontSize: '0.3rem'}} >左侧内容居中于List</p>
    <p style = {{fontSize: '0.3rem'}} >右侧内容下对齐于List</p>
</List>
```

ReactNative

```jsx
<List 
    title = {'右侧内容布局下对齐'} 
    leftContent = {<View style = {{width: 18.75, height: 18.75, borderRadius: 18.75, backgroundColor: '#68b1ed', marginRight: 11.25}} ></View>}
    rightContent = {<Text style = {{fontSize: 11.25}} >12:00</Text>}
    rightContentFlex = {'flex-end'}
    showLine
>
    <Text style = {{fontSize: 11.25}} >左侧内容居中于List</Text>
    <Text style = {{fontSize: 11.25}} >右侧内容下对齐于List</Text>
</List>
```

#### 左侧内容布局下对齐

React

```jsx
<List 
    title = {'左侧内容布局下对齐'} 
    leftContent = {<div style = {{width: '0.5rem', height: '0.5rem', borderRadius: '0.5rem', backgroundColor: '#ff4f4f', marginRight: '0.3rem'}} ></div>}
    leftContentFlex = {'flex-end'}
    rightContent = {<div>
        <p style = {{fontSize: '0.35rem'}} >左侧内容上对齐于List</p>
        <p style = {{fontSize: '0.35rem'}} >右侧内容居中于List</p>
    </div>}
>    
</List>
```

ReactNative

```jsx
<List 
    title = {'左侧内容布局下对齐'} 
    leftContent = {<View style = {{width: 18.75, height: 18.75, borderRadius: 18.75, backgroundColor: '#ff4f4f', marginRight: 11.25}} ></View>}
    leftContentFlex = {'flex-end'}
    rightContent = {<View>
        <Text style = {{fontSize: 13.125}} >左侧内容上对齐于List</Text>
        <Text style = {{fontSize: 13.125}} >右侧内容居中于List</Text>
    </View>}
>    
</List>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
listStyle | list最顶层的样式，一般用于margin和padding | object | `{}`
contentStyle `rn only` | list内容样式，不包括按钮 | object | `{}`
title | 列表标题 | string | `""`
titleStyle | 自定义标题样式 | object | `{}`
rightContent | list右侧内容 | element | `null`
rightIcon | 右侧icon | element | `<Image/> => rn`, `<img/> => h5`
showRightIcon | 是否显示右侧icon | boolean | `false`
leftContent | list左侧内容 | element | `null`
leftContentFlex | 左侧内容的垂直布局 | string, flex-justify-content | `"center"`
rightContentFlex | 右侧内容的垂直布局 | string, flex-justify-content | `"center"`
onPress | list点击时的回调 | function | `() => {}`
touchOpacity `rn only` | list点击时的透明度 | number | `1`
showLine | 是否显示底部分割线 | boolean | `false`
lineMargin | 底部分割线的margin | number | `15 => rn`, `30 => h5(px)`
btnConfig `rn only` | 左滑显示出的按钮, `//[], {text, color, fontSize, backgroundColor, width}` | array | `[]`