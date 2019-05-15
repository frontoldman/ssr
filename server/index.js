const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const koaStatic = require('koa-static')

var htmlPath = path.resolve(__dirname, '../test/index.html')
var html = fs.readFileSync(htmlPath, 'utf8')

var app = new Koa()

app.use(koaStatic(path.resolve(__dirname, '../')))
app.use(ctx => {
  ctx.body = html
})


app.listen(9999, error => {
  if (error) {
    fn(error)
    return
  }
  console.log(`server start on 9999`)
})