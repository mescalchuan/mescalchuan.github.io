# Flex

基于flex实现的栅格系统。

#### 基本使用

React

```jsx
<Flex flexStyle = {{marginBottom: '0.4rem'}} >
    <Flex.Item>
        <div style = {{backgroundColor: '#108EE9'}} >
            <p>平分</p>
        </div>
    </Flex.Item>
    <Flex.Item>
        <div style = {{backgroundColor: '#4badf3'}} >
            <p>平分</p>
        </div>
    </Flex.Item>
</Flex>
```

ReactNative

```jsx
<Flex flexStyle = {{marginBottom: 15}} >
    <Flex.Item>
        <View style = {{backgroundColor: '#108EE9'}} >
            <Text>平分</Text>
        </View>
    </Flex.Item>
    <Flex.Item>
        <View style = {{backgroundColor: '#4badf3'}} >
            <Text>平分</Text>
        </View>
    </Flex.Item>
</Flex>
```

#### 控制主轴

React

```jsx
<Flex 
    justify = {'flex-end'} 
    flexStyle = {{marginBottom: '0.5333rem'}} 
>
  {
      (function() {
          return [1,2,3].map((item, index) => {
              return (
                  <div key = {index} style = {{marginLeft: '0.2667rem', marginRight: 0, backgroundColor: '#8c62f9'}} >
                      <p>主轴 flex-end</p>
                  </div>
              )
          })
      })()
  }
</Flex>
```

ReactNative

```jsx
<Flex 
    justify = {'flex-end'} 
    flexStyle = {{marginBottom: 20}} 
>
  {
      (function() {
          return [1,2,3].map((item, index) => {
              return (
                  <Text key = {index} style = {{marginLeft: 10, marginRight: 0, backgroundColor: '#8c62f9'}} >主轴 flex-end</Text>
              )
          })
      })()
  }
</Flex>
```

#### 控制次轴

React

```jsx
<Flex 
    align = {'flex-end'}
    flexStyle = {{marginBottom: '0.5333rem', height: '1rem', backgroundColor: '#eeeeee'}} 
>
    {
        (function() {
            return [1,2,3].map((item, index) => {
                return (
                    <p 
                        key = {index} 
                        style = {{marginLeft: '0.2667rem', marginRight: 0, backgroundColor: '#ff4f4f'}} 
                    >
                        次抽 flex-end
                    </p>
                )
            })
        })()
    }
</Flex>
```

ReactNative 

```jsx
<Flex 
    align = {'flex-end'}
    flexStyle = {{marginBottom: 20, height: 37.5, backgroundColor: '#eeeeee'}} 
>
    {
        (function() {
            return [1,2,3].map((item, index) => {
                return (
                    <Text 
                        key = {index} 
                        style = {{marginLeft: 10, marginRight: 0, backgroundColor: '#ff4f4f'}} 
                    >
                        次抽 flex-end
                    </Text>
                )
            })
        })()
    }
</Flex>
```

#### 折行

React

```jsx
<Flex flexStyle = {{marginBottom: '0.5333rem'}} wrap = {'wrap'} >
    {
        (function() {
            return [1,2,3,5,6,7,8,9].map((item, index) => {
                return (
                    <div 
                        key = {index} 
                        style = {{marginLeft: '0.2667rem', marginRight: 0, marginTop: '0.2667rem', backgroundColor: '#11b7c0'}} 
                    >
                        <p>flex-wrap wrap</p>
                    </div>
                )
            })
        })()
    }
</Flex>
```

ReactNative

```jsx
<Flex flexStyle = {{marginBottom: 20}} wrap = {'wrap'} >
    {
        (function() {
            return [1,2,3,5,6,7,8,9].map((item, index) => {
                return (
                    <View 
                        key = {index} 
                        style = {{marginLeft: 10, marginRight: 0, marginTop: 10, backgroundColor: '#11b7c0'}} 
                    >
                        <Text>flex-wrap wrap</Text>
                    </View>
                )
            })
        })()
    }
</Flex>
```

#### 水平垂直居中

React

```jsx
<Flex justify = {'center'} align = {'center'} flexStyle = {{width: '5rem', height: '3rem', backgroundColor: '#afb50c'}} >
    <p>水平垂直居中</p>
</Flex>
```

ReactNative

```jsx
<Flex justify = {'center'} align = {'center'} flexStyle = {{width: 187.5, height: 112.5, backgroundColor: '#afb50c'}} >
    <Text>水平垂直居中</Text>
</Flex>
```

> 将 flex 设置为 -1 则代表容器宽度脱离 flex 限制，由自身决定实际值。

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
justify | 主轴对齐方式 | string, flex-justify-conent | `"flex-start"`
align | 次轴对齐方式 | string, flex-align-items (`h5`比`rn`多了`stretch`和`baseline`) | `"flex-start"`
wrap| 折行方式 | string, flex-wrap | `"wrap"`
flexStyle | 容器样式 | object | `{}`
`Flex.Item` flex | 空间分配比例 | number | `1`
`Flex.Item` flexItemStyle | flexItem样式 | object | `{}` 