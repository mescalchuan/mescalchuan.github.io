#### 九、 图片
较小的图片会直接转为dataURl嵌入到模块当中以减少网络请求。由于html并不属于模块，因此，较大的图片直接生成到了`image`文件夹下，名字与原来一致（开发环境下会生成到`entry`中）。