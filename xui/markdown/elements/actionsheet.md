# ActionSheet

底部弹出框，多用于分享、图片下载等操作。

#### 基本

React

```jsx
<Button onPress = {() => this.ActionSheet1.show()} >打开弹框</Button>
<ActionSheet
    ref = {o => this.ActionSheet1 = o}
    options = {[
        'option1',
        'option2',
        'option3'
    ]}
/>
```

ReactNative

```jsx
<Button onPress = {() => this.ActionSheet1.show()} >打开弹框</Button>
<ActionSheet
    ref = {o => this.ActionSheet1 = o}
    options = {[
        'option1',
        'option2',
        'option3'
    ]}
/>
```

#### 带标题

React

```jsx
<Button onPress = {() => this.ActionSheet2.show()} >带标题</Button>
<ActionSheet
    ref = {o => this.ActionSheet2 = o}
    title = {'弹框'}
    options = {[
        'option1',
        'option2',
        'option3'
    ]}
    onPress = {(index) => alert(index)}
/>
```

ReactNative

```jsx
<Button onPress = {() => this.ActionSheet2.show()} >带标题</Button>
<ActionSheet
    ref = {o => this.ActionSheet2 = o}
    title = {'弹框'}
    options = {[
        'option1',
        'option2',
        'option3'
    ]}
    onPress = {(index) => alert(index)}
/>
```

#### 不显示取消按钮

React

```jsx
<Button onPress = {() => this.ActionSheet3.show()} >不显示取消按钮</Button>
<ActionSheet
    ref = {o => this.ActionSheet3 = o}
    options = {[
        'option1',
        'option2',
        'option3'
    ]}
    showCancelButton = {false}
    onPress = {(index) => {
        alert(index)
        this.ActionSheet3.close()
    }}
/>
```

ReactNative

```jsx
<Button onPress = {() => this.ActionSheet3.show()} >不显示取消按钮</Button>
<ActionSheet
    ref = {o => this.ActionSheet3 = o}
    options = {[
        'option1',
        'option2',
        'option3'
    ]}
    showCancelButton = {false}
    onPress = {(index) => {
        alert(index)
        this.ActionSheet3.close()
    }}
/>
```

#### 点击蒙版关闭

React

```jsx
<Button onPress = {() => this.ActionSheet4.show()} >点击蒙版关闭</Button>
<ActionSheet
    ref = {o => this.ActionSheet4 = o}
    options = {[
        'option1',
        'option2',
        'option3'
    ]}
    backdropPressToClose
/>
```

ReactNative

```jsx
<Button onPress = {() => this.ActionSheet4.show()} >点击蒙版关闭</Button>
<ActionSheet
    ref = {o => this.ActionSheet4 = o}
    options = {[
        'option1',
        'option2',
        'option3'
    ]}
    backdropPressToClose
/>
```

#### 自定义选项

React

```jsx
<Button onPress = {() => this.ActionSheet5.show()} >自定义选项</Button>
<ActionSheet
    ref = {o => this.ActionSheet5 = o}
    options = {[
        'option1',
        <span style = {{color: 'gray'}} >{'option2'}</span>,
        <span style = {{color: '#ff4f4f'}} >{'删除'}</span>
    ]}
/>
```

ReactNative

```jsx
<Button onPress = {() => this.ActionSheet5.show()} >自定义选项</Button>
<ActionSheet
    ref = {o => this.ActionSheet5 = o}
    options = {[
        'option1',
        <Text style = {{color: 'gray'}} >{'option2'}</Text>,
        <Text style = {{color: '#ff4f4f'}} >{'删除'}</Text>
    ]}
/>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
title | 标题 | string | `""`
options | 按钮配置项 | array | `[]`
showCancelButton | 是否显示取消按钮 | boolean | `true`
cancelButtonTitle | “取消”按钮的标题 | string | `"取消"`
cancelButtonColor | “取消”按钮的颜色 | string | `"#108EE9"`
backdropPressToClose | 点击遮罩层时是否关闭ActionSheet | boolean | `false`
onPress | ActionSheet点击事件，会返回每个options的索引 | function | `() => {}`
show() `static` | 外部打开actionsheet | function | |
hide()  `static` | 外部关闭actionsheet | function | |