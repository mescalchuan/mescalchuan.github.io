<template>
  <div id="wangeditor" >
    <div ref="editorElem" style="text-align: left;height:300px"></div>
  </div>
</template>
<script>
import E from '../wangeditor2/js/wangEditor.js'
export default {
  name: 'EditorElem',
  props: ['value'], // 接收父组件的方法
  data() {
    return {
      editor: null,
      editorContent: ''
    }
  },
  // watch: {
  //   value() {
  //     this.editor.txt.html(this.value)
  //   }
  // },
  mounted() {
    this.editor = new E(this.$refs.editorElem)
    this.editor.onchange = html => {
      this.editorContent = html
      this.$emit('change', this.editorContent)
      this.$emit('input', this.editorContent)
      // this.catchData(this.editorContent)  // 把这个html通过catchData的方法传入父组件
    }
    this.editor.config.uploadImgUrl = '/api/v1/image/upload'
    this.editor.config.uploadImgFileName = 'file'
    this.editor.config.menus = [
      'source',
        '|',
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        'bgcolor',
        '|',
        'quote',
        'fontfamily',
        'fontsize',
        'head',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'link',
        'unlink',
        'table',
        'emotion',
        '|',
        'img',
        'insertcode',
        '|',
        'undo',
        'redo',
        'fullscreen'
    ]
    // 下面是最重要的的方法
    this.editor.config.uploadImgHooks = {
      before: function(xhr, editor, files) {
        // 图片上传之前触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
        // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
        // return {
        //     prevent: true,
        //     msg: '放弃上传'
        // }
      },
      success: function(xhr, editor, result) {
        // 图片上传并返回结果，图片插入成功之后触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        this.imgUrl = Object.values(result.data).toString()
      },
      fail: function(xhr, editor, result) {
        // 图片上传并返回结果，但图片插入错误时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      },
      error: function(xhr, editor) {
        // 图片上传出错时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },
      timeout: function(xhr, editor) {
        // 图片上传超时时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },

      // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
      // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
      customInsert: function(insertImg, result, editor) {
        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        let url = Object.values(result.data) // result.data就是服务器返回的图片名字和链接
        JSON.stringify(url) // 在这里转成JSON格式
        insertImg(url)
        // result 必须是一个 JSON 格式字符串！！！否则报错
      }
    }

    this.editor.create() // 创建富文本实例
    this.editor.$txt.html(this.value)
  }
}
</script>
<style>
#wangeditor {
  width: 100%;
}
</style>
