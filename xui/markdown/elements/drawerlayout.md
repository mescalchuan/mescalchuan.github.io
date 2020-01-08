# DrawerLayout

抽屉视图，用于左右侧弹出的菜单。

```js
import DrawerLayout, { DRAWER_POSITION } from './component/drawerLayout'
```

React

```js
const drawerView = (
    <div>
        <List title = {'前往商城'} showLine />
        <List title = {'个人中心'} showLine />
        <List title = {'设置'} showLine />
        <p style = {{fontSize: '0.4rem'}} >I'm in the Drawer!</p>
    </div>
)
```

```jsx
<div>
    <DrawerLayout 
        drawerPosition = {DRAWER_POSITION.RIGHT} 
        renderNavigationView = {() => drawerView} 
        ref = {drawer => this.drawer1 = drawer} 
    >
        <Button 
            onPress = {() => this.drawer1.openDrawer()} 
        >打开右侧抽屉</Button>
    </DrawerLayout>
    <br/>
    <DrawerLayout 
        renderNavigationView = {() => drawerView} 
        ref = {drawer => this.drawer = drawer} 
    >
        <Button 
            onPress = {() => this.drawer.openDrawer()} 
        >打开左侧抽屉</Button>
    </DrawerLayout>
</div>
```

ReactNative

```js
const drawerView = (
    <View>
        <List title = {'前往商城'} showLine />
        <List title = {'个人中心'} showLine />
        <List title = {'设置'} showLine />
        <Text style = {{fontSize: 15}} >I'm in the Drawer!</Text>
    </View>
)
```

```jsx
<ScrollView>
    <DrawerLayout 
        drawerPosition = {DRAWER_POSITION.RIGHT} 
        renderNavigationView = {() => drawerView} 
        ref = {drawer => this.drawer1 = drawer} 
    >
        <Button 
            onPress = {() => this.drawer1.openDrawer()} 
        >打开右侧抽屉</Button>
    </DrawerLayout>
    <DrawerLayout 
        renderNavigationView = {() => drawerView} 
        ref = {drawer => this.drawer = drawer} 
    >
        <Button 
            onPress = {() => this.drawer.openDrawer()} 
        >打开左侧抽屉</Button>
    </DrawerLayout>
</ScrollView>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
drawerWidth `rn only` | 抽屉宽度 | number | `200`
renderNavigationView | 抽屉内容 | function | `() => {}`
drawerPosition | 抽屉位置 | DRAWER_POSITION |`DRAWER_POSITION.LEFT`
drawerLockMode `rn only` | 抽屉状态 | DRAWER_LOCK_MODE | `DRAWER_LOCK_MODE.UNLOCKED`
keyboardDismissMode `rn only` | 键盘关闭模式 | KEYBOARD_DISMISS_MODE | `KEYBOARD_DISMISS_MODE.NONE`
onDrawerOpen | 抽屉打开时的回调 | function | `() => {}`
onDrawerClose | 抽屉关闭时的回调 | function | `() => {}`
onDrawerSlide `rn only` | 抽屉滑动时的回调 | function | `() => {}`
openDrawer() `static` | 外部打开抽屉 | function | |
closeDrawer() `static` | 外部关闭抽屉 | function | |