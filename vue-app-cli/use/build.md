#### 五、 发布
即便`vue-app-cli`不区分环境，但当你准备部署到服务器或者打包成app时，仍然需要额外做一些操作：

* 可能你注意到了，当把`devtoolService`设为`true`后，在`build`文件夹下有很多`.map`结尾的文件。即使你设为`false`，多余的文件虽然没有了，但是打包后的文件却变得格外庞大。这是因为`vue-app-cli`实现了源码映射来帮助你更好地调试代码。我们在线上不会用到它，所以请在发布时将`config.js`中的`isDevelopment`设置为`false`，然后重新启动项目即可。

* 较大的图片会生成到`build/images`下，在发布时请将该图片文件夹删除。