# Collapse

折叠面板，信息的展开与收起。

#### 基本

React

```jsx
<Collapse>
    <Collapse.Panel title = {'标题 1'} panelKey = {'panel1'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 1 的内容</p>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 2'} panelKey = {'panel2'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 2 的内容</p>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 3'} panelKey = {'panel3'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 3 的内容</p>
    </Collapse.Panel>
</Collapse>
```

ReactNative

```jsx
<Collapse>
    <Collapse.Panel title = {'标题 1'} panelKey = {'panel1'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 1 的内容</Text>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 2'} panelKey = {'panel2'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 2 的内容</Text>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 3'} panelKey = {'panel3'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 3 的内容</Text>
    </Collapse.Panel>
</Collapse>
```

#### 激活项

React

```jsx
<Collapse activeKey = {'panel2'} >
    <Collapse.Panel title = {'标题 1'} panelKey = {'panel1'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 1 的内容</p>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 2'} panelKey = {'panel2'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 2 的内容</p>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 3'} panelKey = {'panel3'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 3 的内容</p>
    </Collapse.Panel>
</Collapse>
```

ReactNative

```jsx
<Collapse activeKey = {'panel2'} >
    <Collapse.Panel title = {'标题 1'} panelKey = {'panel1'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 1 的内容</Text>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 2'} panelKey = {'panel2'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 2 的内容</Text>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 3'} panelKey = {'panel3'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 3 的内容</Text>
    </Collapse.Panel>
</Collapse>
```

#### 手风琴

React

```jsx
<Collapse accordion = {true} >
    <Collapse.Panel title = {'标题 1'} panelKey = {'panel1'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 1 的内容</p>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 2'} panelKey = {'panel2'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 2 的内容</p>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 3'} panelKey = {'panel3'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 3 的内容</p>
    </Collapse.Panel>
</Collapse>
```

ReactNative

```jsx
<Collapse accordion = {true} >
    <Collapse.Panel title = {'标题 1'} panelKey = {'panel1'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 1 的内容</Text>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 2'} panelKey = {'panel2'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 2 的内容</Text>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 3'} panelKey = {'panel3'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 3 的内容</Text>
    </Collapse.Panel>
</Collapse>
```

#### 回调

React

```jsx
<Collapse accordion = {true} onChange = {(activeKey) => activeKey && this.toast.show({
    mask: false,
    content: activeKey
})} >
    <Collapse.Panel title = {'标题 1'} panelKey = {'panel1'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 1 的内容</p>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 2'} panelKey = {'panel2'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 2 的内容</p>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 3'} panelKey = {'panel3'} >
        <p style = {{fontSize: '0.35rem', margin: '0.5rem 0'}} >这是标题 3 的内容</p>
    </Collapse.Panel>
</Collapse>
<Toast ref = {toast => this.toast = toast} />
```

ReactNative

```jsx
<Collapse accordion = {true} onChange = {(activeKey) => activeKey && this.toast.show({
    mask: false,
    content: activeKey
})} >
    <Collapse.Panel title = {'标题 1'} panelKey = {'panel1'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 1 的内容</Text>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 2'} panelKey = {'panel2'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 2 的内容</Text>
    </Collapse.Panel>
    <Collapse.Panel title = {'标题 3'} panelKey = {'panel3'} >
        <Text style = {{fontSize: 13.125, marginVertical: 18.75, marginHorizontal: 0}} >这是标题 3 的内容</Text>
    </Collapse.Panel>
</Collapse>
<Toast ref = {toast => this.toast = toast} />
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
activityKey | 当前激活项 | string, number | `""`
onChange | 任意一个折叠面板的折叠状态发生改变时的回调，返回当前激活项（string or JSON.stringify(stringArray)） | function | `() => {}`
accordion | 是否开启手风琴模式 | boolean | `false`
style | 自定义样式 | object | `{}`
`Collapse.Panel` key | id | string, number | `""`
`Collapse.Panel` title | 标题 | string, number | `""`