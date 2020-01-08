# Carousel

轮播图，用于图片切换展示。

#### 基本

React

```js
const imgArr = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg'];
```

```jsx
<Carousel
    width = {'100%'}
    height = {'30vh'}
>
    {
        imgArr && imgArr.map((url, index) =>
        <img key = { index } src = { url } />)
    }
</Carousel>
```

ReactNative

```js
const carouselStyle = {width: utils.window.width, height: 200, resizeMode: 'cover'}
```

```jsx
<Carousel
    width = {utils.window.width}
    height = {200}
>
    <Image source = {require('../images/1.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/2.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/3.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/4.jpg')} style = {carouselStyle} />
</Carousel>
```

#### 手动播放

React

```jsx
<Carousel
    width = {'100%'}
    height = {'30vh'}
    autoPlay = {false} 
>
    {
        imgArr && imgArr.map((url, index) =>
        <img key = { index } src = { url } />)
    }
</Carousel>
```

ReactNative

```jsx
<Carousel
    width = {utils.window.width}
    height = {200}
    autoPlay = {false} 
>
    <Image source = {require('../images/1.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/2.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/3.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/4.jpg')} style = {carouselStyle} />
</Carousel>
```

#### 开始索引

React

```jsx
<Carousel
    width = {'100%'}
    height = {'30vh'}
    index = {2} 
>
    {
        imgArr && imgArr.map((url, index) =>
        <img key = { index } src = { url } />)
    }
</Carousel>
```

ReactNative

```jsx
<Carousel
    width = {utils.window.width}
    height = {200}
    index = {2} 
>
    <Image source = {require('../images/1.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/2.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/3.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/4.jpg')} style = {carouselStyle} />
</Carousel>
```

#### 轮播间隔时长

React

```jsx
<Carousel
    width = {'100%'}
    height = {'30vh'}
    autoPlayTimeout = {1000}
>
    {
        imgArr && imgArr.map((url, index) =>
        <img key = { index } src = { url } />)
    }
</Carousel>
```

ReactNative

```jsx
<Carousel
    width = {utils.window.width}
    height = {200}
    autoPlayTimeout = {1000}
>
    <Image source = {require('../images/1.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/2.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/3.jpg')} style = {carouselStyle} />
    <Image source = {require('../images/4.jpg')} style = {carouselStyle} />
</Carousel>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
index | 当前索引值 | number | `0`
width | 轮播图宽度 `required` | number `rn`, any `h5` | `null`
height | 轮播图高度 `required` | number `rn`, any `h5` | `null`
autoPlay | 是否自动播放 | boolean | `true`
autoPlayTimeout | 自动播放时每张图片的切换时间 | number | `3000 => ms`
showDot | 是否展示圆点 | boolean | `true`
dotColor | 圆点的颜色 | string | `"#666666"`
activeDotColor | 激活圆点的颜色 | string | `"#68b1ed"`
dotWidth | 圆点的宽度 | number | `10 => rn`, `20 => h5(px)`
dotBottomOffset `rn only` | 原点距离轮播图底部的距离，默认为圆点的宽度 | number | `dotWidth`
onIndexChanged | 索引值发生改变时的回调 | function | `() => {}`
carouselStyle `rn only` | 轮播图样式 | object | `{}` 