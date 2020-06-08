/**
 * 主文件
 */
import { app, serverInstance } from './server-lib'
import routerGenerate from './router'
import socketGenerate from './socket'
import socketListenerGenerate from './socket/listener'

const port = process.env.PORT || 1111

// 设置路由监听器
app.use(routerGenerate)

// 设置socket监听器
socketGenerate(serverInstance).then(socketListenerGenerate)

// server start
serverInstance.listen(port, () => {
  console.log(`server listen at ${port}`)
})
