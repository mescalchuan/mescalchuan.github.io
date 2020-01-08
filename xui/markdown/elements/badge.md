# Badge

角标，用于消息数量的显示以及一般的小型徽标。

> 当含有子组件时，角标悬浮在自组件右上角，num生效，text失效；当不含自组件时，角标作为单独的徽标，text失效，num生效。

#### 使用示例

React

```js
const boxContainer = <div style = {{width: '1rem', height: '1rem', backgroundColor: '#eee'}} ></div>
```

```jsx
<Badge style = {{marginRight: '0.2rem'}} num = {1} />
<Badge style = {{marginRight: '0.2rem'}} text = {'券'} defaultBackColor = {'#f19736'} />
<Badge style = {{marginRight: '0.2rem'}} text = {'惠'} defaultBackColor = {'#3eaf7c'} />
<Badge text = {'Hot'} />
<div>
    <br/>
    <Badge num = {1} style = {{marginRight: '0.8rem'}} >{boxContainer}</Badge>
    <Badge num = {10} style = {{marginRight: '0.8rem'}} >{boxContainer}</Badge>
    <Badge num = {100} style = {{marginRight: '0.8rem'}} >{boxContainer}</Badge>
</div>
```

ReactNative

```js
const boxContainer = <View style = {{width: 37.5, height: 37.5, backgroundColor: '#eee'}} ></View>
```

```jsx
<View style = {{flexDirection: 'row'}} >
    <Badge style = {{marginRight: 7.5}} num = {1} />
    <Badge style = {{marginRight: 7.5}} text = {'券'} defaultBackColor = {'#f19736'} />
    <Badge style = {{marginRight: 7.5}} text = {'惠'} defaultBackColor = {'#3eaf7c'} />
    <Badge text = {'Hot'} />
</View>
<View style = {{flexDirection: 'row', marginTop: 15}} >
    <Badge num = {1} style = {{marginRight: 30}} >{boxContainer}</Badge>
    <Badge num = {10} style = {{marginRight: 30}} >{boxContainer}</Badge>
    <Badge num = {100} style = {{marginRight: 30}} >{boxContainer}</Badge>
</View>
```

> ReactNative, 若想独立使用 badge，必须在父层指定 flexDirection 为 row，否则 badge 的宽度会继承 react native 默认的 flex-1

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
num | 角标数字 | number | `0`
defaultBackColor | 角标背景色 | string | `"#ff4f4f"`
fontColor | 角标文字颜色 | string | `"white"`
text | 自定义角标内容 | string | `""`
style | 自定义角标样式 | object | `{}`