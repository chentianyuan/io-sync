/**
 * server-lib
 */

import Koa from 'koa'
import http from 'http'

const app = new Koa()
const serverInstance: http.Server = http.createServer(app.callback())

export {
  app,
  serverInstance
}
