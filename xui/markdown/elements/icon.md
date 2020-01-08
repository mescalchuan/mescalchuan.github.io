# Icon

字体图标，基于`Ionicons`。

React

```jsx
<Flex wrap = {'wrap'} justify = {'center'} >
    {
        Object.keys(IconMap).map(item => 
            <Flex.Item flex = {-1} key = {item} flexItemStyle = {{width: '1.5rem', padding: '0 0.2rem', textAlign: 'center'}} >
                <Icon name = {item} />
            </Flex.Item>
        )
    }
</Flex>
```

ReactNative

```jsx
<Flex wrap = {'wrap'} justify = {'center'} >
    {
        Object.keys(IconMap).map(item => 
            <Flex.Item flex = {-1} key = {item} flexItemStyle = {{width: 56.25, paddingVertical: 0, paddingHorizontal: 7.5, alignItems: 'center'}} >
                <Icon name = {item} />
            </Flex.Item>
        )
    }
</Flex>   
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
name | icon名字，参考`iconMap.json` | string | `"ios-add"`
size | icon大小 | number | `15 => rn`, `30 => h5(px)`
color | icon颜色 | string | `"#666666"`
iconStyle | 自定义icon样式 | object | `{}`