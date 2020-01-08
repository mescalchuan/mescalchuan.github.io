# Card

卡片视图，用于详细信息的展示。

#### 只有内容

React

```jsx
<Card >
    <Card.Body>
        <p style = {{fontSize: '0.3rem'}} >只有内容</p>
    </Card.Body>
</Card>
```

ReactNative

```jsx
<Card >
    <Card.Body>
        <Text style = {{fontSize: 11.25}} >只有内容</Text>
    </Card.Body>
</Card>
```

#### 图片

React

```jsx
<Card >
    <Card.Header>
        <p style = {{fontSize: '0.3rem'}} >图片</p>
    </Card.Header>
    <Card.Body>
        <img src = {'../images/1.jpg'} />
    </Card.Body>
</Card>
```

ReactNative

```jsx
<Card >
    <Card.Header>
        <Text style = {{fontSize: 11.25}} >图片</Text>
    </Card.Header>
    <Card.Body>
        <Image source = {require('../images/1.jpg')} style = {{height:250}} />
    </Card.Body>
</Card>
```

> ReactNative 版本需要自己设置图片高度。否则就算宽度限制了，高度还是图片原本高度。这是因为 React Native 自身不会根据图片宽度来自动调节高度。

#### 只有底部

React

```jsx
<Card >
    <Card.Footer>
        <p style = {{fontSize: '0.3rem'}} >底部左侧</p>
        <p style = {{fontSize: '0.3rem'}} >底部右侧</p>
    </Card.Footer>
</Card>
```

ReactNative

```jsx
<Card >
    <Card.Footer>
        <Text style = {{fontSize: 11.25}} >底部左侧</Text>
        <Text style = {{fontSize: 11.25}} >底部右侧</Text>
    </Card.Footer>
</Card>
```

#### 完整卡片

React

```jsx
<Card >
    <Card.Header>
        <p style = {{fontSize: '0.3rem'}} >这是一个标题</p>
    </Card.Header>
    <Card.Body>
        <p style = {{fontSize: '0.3rem'}} >这是一个同时使用到了Card.Header、Card.Body、Card.Footer的卡片。</p>
    </Card.Body>
    <Card.Footer>
        <p style = {{fontSize: '0.3rem'}} >底部左侧</p>
        <p style = {{fontSize: '0.3rem'}} >底部右侧</p>
    </Card.Footer>
</Card>
```

ReactNative

```jsx
<Card >
    <Card.Header>
        <Text style = {{fontSize: 11.25}} >这是一个标题</Text>
    </Card.Header>
    <Card.Body>
        <Text style = {{fontSize: 11.25}} >这是一个同时使用到了Card.Header、Card.Body、Card.Footer的卡片。</Text>
    </Card.Body>
    <Card.Footer>
        <Text style = {{fontSize: 11.25}} >底部左侧</Text>
        <Text style = {{fontSize: 11.25}} >底部右侧</Text>
    </Card.Footer>
</Card>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
`Card` cardStyle | 卡片基本样式 | object | `{}`
`Card.Header` headerStyle | 头部样式 | object | `{}`
`Card.Body` bodyStyle | 主要内容体样式 | object | `{}`
`Card.Footer` footerStyle | 底部样式 | object | `{}`