const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const koaStatic = require('koa-static')
const React = require('React')
const { renderToString } = require('react-dom/server')
import Root from '../src/component/Root'

var htmlPath = path.resolve(__dirname, '../test/index.html')
var html = fs.readFileSync(htmlPath, 'utf8')

var app = new Koa()

app.use(koaStatic(path.resolve(__dirname, '../')))
app.use(ctx => {
  var result = renderToString(<Root/>)
  console.log(result)
  ctx.type = 'html'
  ctx.status = 200
  ctx.body = html.replace('${template}', result)
})

app.listen(9999, error => {
  if (error) {
    console.log(error)
    return
  }
  console.log(`server start on 9999`)
})