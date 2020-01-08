# Tabbar

选项卡，位于页面最底部，用于页面切换。

React

```jsx
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style = {{height:'100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <p style = {{fontSize: '0.5rem'}} >这是首页</p>
            </div> 
        )
    }
}

class Active extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style = {{height:'100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <p style = {{fontSize: '0.5rem'}} >这是当前激活页</p>
            </div> 
        )
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            timer: null
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div style = {{height:'100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                <p style = {{fontSize: '0.5rem'}} >这是定时器页，切换页面不会中断计时</p>
                <p style = {{fontSize: '0.35rem'}} >{this.state.count}</p>
            </div> 
        )
    }
}

class Setting extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style = {{height:'100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <p style = {{fontSize: '0.5rem'}} >这是设置页</p>
            </div> 
        )
    }
}

export default class TabbarExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 'active'
        };
    }
    setTabItem(name, title, icon) {
        return (
          <TabBar.Item 
            changeTab = {(tab) => this.setState({currentTab: tab})}
            title = {title}
            name = {name}
            key = {name}
            icon = {<Icon name = {icon} size = {25} color = {'#666666'} />}
            selectedIcon = {<Icon name = {icon} size = {25} color = {'#108ee9'} />}
          />
        )
    }
    setTabComponent(name, component) {
        return (
          <TabBar.Component name = {name} >
            {component}
          </TabBar.Component>
        )
    }
    renderTabItem() {
        let tabItems = [];
        tabItems.push(this.setTabItem('home', '首页', 'ios-home'));
        tabItems.push(this.setTabItem('active', '激活', 'ios-bulb'));
        tabItems.push(this.setTabItem('timer', '定时器', 'ios-clock'));
        tabItems.push(this.setTabItem('settings', '设置', 'ios-settings'));
        return tabItems;
    }
    renderTabComponents() {
        let tabComponents = [];
        tabComponents.push(this.setTabComponent('home', <Home/>));
        tabComponents.push(this.setTabComponent('active', <Active/>));
        tabComponents.push(this.setTabComponent('timer', <Timer/>));
        tabComponents.push(this.setTabComponent('settings', <Setting/>));
        return tabComponents;
    }
    render() {
        /*默认x-tabbar-container的height是100vh*/
        /* 新增一个containerStyle属性，作用于tabbar组件的最顶部div，用于设置整体高度*/
        return (
            <div className = "container" style = {{padding: 0}} >
                <TabBar 
                    containerStyle = {{height: '100%'}}
                    selectedTab = {this.state.currentTab} 
                    items = {this.renderTabItem()} 
                    components = {this.renderTabComponents()} 
                />
            </div>
        )
    }
}
```

ReactNative

```jsx
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                <Text style = {{fontSize: 18.75}} >这是首页</Text>
            </View> 
        )
    }
}

class Active extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                <Text style = {{fontSize: 18.75}} >这是当前激活页</Text>
            </View> 
        )
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            timer: null
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                <Text style = {{fontSize: 18.75}} >这是定时器页，切换页面不会中断计时</Text>
                <Text style = {{fontSize: 13.125}} >{this.state.count}</Text>
            </View> 
        )
    }
}

class Setting extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                <Text style = {{fontSize: 18.75}} >这是设置页</Text>
            </View> 
        )
    }
}

export default class TabbarExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 'active'
        };
    }
    setTabItem(name, title, icon) {
        return (
          <TabBar.Item 
            changeTab = {(tab) => this.setState({currentTab: tab})}
            title = {title}
            name = {name}
            key = {name}
            icon = {<Icon name = {icon} size = {25} color = {'#666666'} />}
            selectedIcon = {<Icon name = {icon} size = {25} color = {'#108ee9'} />}
          />
        )
    }
    setTabComponent(name, component) {
        return (
          <TabBar.Component name = {name} >
            {component}
          </TabBar.Component>
        )
    }
    renderTabItem(name, title, icon, component) {
        return (
          <TabBar.Item
            selected = {this.state.currentTab === name}
            changeTab = {(tab) => this.setState({currentTab: tab})}
            title = {title}
            name = {name}
            icon = {<Icon name = {icon} size = {25} color = {'#666666'} />}
            selectedIcon = {<Icon name = {icon} size = {25} color = {'#108ee9'} />}
            titleStyle = {{fontSize: 12, color: '#666666'}}
            selectedTitleStyle = {{fontSize: 12}}
          >
            {component}
          </TabBar.Item>
        )
    }
    render() {
        return (
            <TabBar 
                containerStyle = {{flex: 1}}
                selectedTab = {this.state.currentTab} 
            >
                {this.renderTabItem('home', '首页', 'ios-home', <Home/>)}
                {this.renderTabItem('active', '激活', 'ios-bulb', <Active/>)}
                {this.renderTabItem('timer', '定时器', 'ios-clock', <Timer/>)}
                {this.renderTabItem('settings', '设置', 'ios-settings', <Setting/>)}
            </TabBar>
        );
    }
}
```

<br/>

属性`rn` | 说明 | 类型 | 默认值
----|-----|------|------
tabBarStyle | 自定义tabBar容器样式 | object | `{}`
tabBarShadowStyle | 自定义tabBar最上方的分割线的样式 | object | `{}`
hidesTabTouch | 指定为true时，touchableOpacity将变为1 | boolean | `false`
`TabBar.Item` selected | 是否被选中 | boolean | `false`
`TabBar.Item` titleStyle | 自定义默认（未选中）时的文本样式 | object | `{}`
`TabBar.Item` selectedTitleStyle | 自定义选中时的文本样式 | object | `{}`
`TabBar.Item` title | 标题 | string | `""`
`TabBar.Item` name | 指定一个key | string | `""`
`TabBar.Item` tabStyle | 自定义每个TabBar.Item的容器样式 | object | `{}`
`TabBar.Item` icon | 未选中时的图标 | element | `null`
`TabBar.Item` selectedIcon | 选中时的图标 | element | `null`
`TabBar.Item` changeTab | 切换时触发，返回选中状态的item的name（key）| function | `() => {}`

属性`h5` | 说明 | 类型 | 默认值
----|-----|------|------
tabBarStyle | 自定义tabBar容器样式 | object | `{}`
tabBarShadowStyle | 自定义tabBar最上方的分割线的样式 | object | `{}`
items | tabbarItems | array | `[]`
components | tabbarComponents | array | `[]`
selectedTab | 选中的tab的name | string | `""`
`TabBar.Item` titleStyle | 自定义默认（未选中）时的文本样式 | object | `{}`
`TabBar.Item` selectedTitleStyle | 自定义选中时的文本样式 | object | `{}`
`TabBar.Item` title | 标题 | string | `""`
`TabBar.Item` name | 指定一个key | string | `""`
`TabBar.Item` tabStyle | 自定义每个TabBar.Item的容器样式 | object | `{}`
`TabBar.Item` icon | 未选中时的图标 | element | `null`
`TabBar.Item` selectedIcon | 选中时的图标 | element | `null`
`TabBar.Item` changeTab | 切换时触发，返回选中状态的item的name（key）| function | `() => {}`