# koa-img-upload-base64

> koa 上传 base64 图片编码转化转环图片

# 使用
```js
  const ImgUpload = require('koa-img-upload-base64')

  app.use(ImgUpload)

```

# 配置
需要自己创建app目录下image文件夹

图片都在 /image 路由下

post 请求创建 /imageupload  创建base64图片  

参赛img

```json
{
  "img": "base64图片"
}
```
