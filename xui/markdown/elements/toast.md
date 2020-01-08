# Toast

小型提示框

#### 基本

React

```jsx
<Button onPress = {() => this.toast.show({
    content: '基本',
})} >基本</Button>
<Toast ref = {toast => this.toast = toast} />
```

ReactNative

```jsx
<Button onPress = {() => this.toast.show({
    content: '基本',
})} >基本</Button>
<Toast ref = {toast => this.toast = toast} />
```

> 若期望 Toast 居中于屏幕，请设置最上层容器的 flex 为 1。

#### 取消遮罩层

React

```jsx
<Button onPress = {() => this.toast.show({
    content: '取消遮罩层',
    mask: false
})} >取消遮罩层</Button>
```

ReactNative

```jsx
<Button onPress = {() => this.toast.show({
    content: '取消遮罩层',
    mask: false
})} >取消遮罩层</Button>
```

#### 全局提示

React

```js
//入口组件
class Root extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.addEventListener('showToast', e => {
            this.rootToast.show(window.toastConfig);
        })
    }
    render() {
        return (
            <div style = {{height:'100%'}} >
                <Toast ref = {toast => this.rootToast = toast} />
                <Router history = {hashHistory} routes = {routes} />
            </div> 
        )
    }
}
```

```jsx
<Button onPress = {() => {
    window.toastConfig = {
        content: '全局提示',
        mask: false
    }
    window.dispatchEvent(new Event('showToast'))
}} >全局提示</Button>
```

ReactNative

```js
//App.js
export default class App extends Component {
    componentDidMount() {
        DeviceEventEmitter.addListener('showToast', (config) => {
            this.rootToast.show(config);
        })
    }
    render() {
        return (
            <View style = {{flex:1}} >
                <AppContainer/>    
                <Toast ref = {toast => this.rootToast = toast} />
            </View>
        )
    }
}
```

```jsx
<Button onPress = {() => {
    DeviceEventEmitter.emit('showToast', {
        content: '全局提示',
        mask: false
    })
}} >全局提示</Button>
```

<br/>

配置项 | 说明 | 类型
----|-----|------
content | 提示信息 | string
duration | 持续时间 | number (ms)
mask | 是否使用遮罩层，默认为true，使用遮罩层的话在toast显示期间无法对屏幕进行任何操作 | boolean