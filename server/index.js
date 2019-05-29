const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const koaStatic = require('koa-static')
const React = require('React')
const { renderToString } = require('react-dom/server')
import Root from '../src/component/Root'

var htmlPath = path.resolve(__dirname, '../test/index.html')
var html = fs.readFileSync(htmlPath, 'utf8')

process.env.IS_SERVER = 'yes'

var app = new Koa()

app.use(koaStatic(path.resolve(__dirname, '../')))
app.use(async ctx => {
  var propsData = await Root.getInitData()
  var result = renderToString(<Root initData={propsData}/>)
  var _html = html.replace('${initData}', JSON.stringify({
    rootData: propsData
  }))
   _html = _html.replace('${template}', result)
  ctx.type = 'html'
  ctx.status = 200
  ctx.body = _html
})

app.listen(9999, error => {
  if (error) {
    console.log(error)
    return
  }
  console.log(`server start on 9999`)
})