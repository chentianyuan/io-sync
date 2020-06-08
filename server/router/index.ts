/**
 * koa router
 */
import fs from 'fs'
import Koa, { Next } from 'koa'

const routerGenerate = function (ctx: Koa.Context, next: Next) {
  if (ctx.req.url === '/') {
    const htmlStream = fs.createReadStream('../client/index.html', 'utf-8')
    ctx.type = 'html'
    ctx.body = htmlStream
  }
  next()
}

export default routerGenerate
