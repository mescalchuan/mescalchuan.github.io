# HTML CSS 优化

#### 多列等高

即使每个列的高度不一致，也能让他们的高度保持一致。
```css
.column {
	float: left;
    padding-bottom: 999px;
    margin-bottom: -999px;
}
```

也可以借鉴table的高度自适应性（table同一行的每个td高度一定一致）
```css
.father {
	dispaly: table;
}
.column {
	display: table-cell;
    width: 1000px; //设置一个很大的宽度，只是为了保证每个td平分table宽度，放心，table的总宽度不会超过自身宽度的
}
//这种方法还有一个好处，就是响应式开发中想要控制一行显示的数量，只需要在要折行的那个column前面加一个display: table-row(模拟tr)的span
```

> SEO优化
* 内容是一个表格，就用table吧，是一个列表，就用ol/ul吧
* 加粗的字体就用b/strong吧，而不是设置font-weight
* 如果是图片，就用img吧，加上alt提高SEO
* 如果是输入框，就用input吧
* 如果是跳转链接，就用a吧，而不是自己监听单击事件（a在手机上滑时不会触发touchstart事件）。
* 如果按钮就写button或input的type=button吧，而不是a标签设置样式。
* 如果是分割线就用hr吧，而不是设置1px高的div。
* 如果是换行文本就用p吧，而不是加上br。

总的来说，要让标签充分发挥自己的作用，而不是一股脑地使用div+css。

#### 三角形
关于border画三角形已经在css世界中提到了。这里，如何用border画一个有边缘色的三角形呢（三角形有边框颜色）？

思路就是画两个三角形，错开位置。
```css
.box {
	width: 200px;
    height: 80px;
    border: 1px solid #ccc;
    position: relative;
}
.box:before {
	content: '';
    position: absolute;
    border: 6px solid transparent;
    border-right-color: #ccc;
    left: -10px;
}
.box:after {
	content: '';
    position: absolute;
    border: 6px solid transparent;
    border-right-color: #fff;
    left: -8px;
}
```

