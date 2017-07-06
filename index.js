const koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const crypto = require('crypto')
const app = new koa();
const upload = new koa();
const fs= require('fs');
function md5(str) {
　　var ret = crypto.createHash('md5').update(str.toString()).digest("hex");
　　return ret;
}
upload.use(bodyParser());
upload.use(async (ctx) => {
  const img = ctx.request.body.img.replace(/ /g,'/').split(',')
  if(!/image\/\w+/.test(img[0])) ctx.body = 'img not image type'
  const name = md5(Date.now())
  try{
    fs.writeFileSync(`./image/${name}.jpg`, new Buffer(img[1], 'base64'))
    ctx.body = `/image/${name}.jpg`
  }catch(err){
    ctx.body = 'upload img error'
  }
})

app.use(serve('./image'));
app.use(mount('/upload', upload))
module.exports =  mount('/image', app)
