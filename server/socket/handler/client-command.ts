/**
 * 执行客户端命令并返回输出流
 */

// exec && execSync
// execFile && execFileSync
// spawn && spawnSync
// child_process中所有的函数都是基于spawn来实现的，当子进程需要返回大量数据给主进程时，最好使用spawn方法（spawn可以流式地返回输出的数据）
import { spawn, exec } from 'child_process'
import { Socket } from 'socket.io'

const STDOUT_EVNET = 'stdout'

function clientCommandHandler (message: string, socket: Socket) {
  const messageArr = message.trim().replace(/\s+/g, ' ').split(' ')
  const spawnObject = spawn(messageArr[0], messageArr.slice(1), { stdio: 'pipe' })

  // output
  spawnObject.stdout.on('data', chunk => {
    console.log(chunk.toString())
    socket.emit(STDOUT_EVNET, chunk.toString())
  })

  // error handler
  spawnObject.on('close', code => {
    console.log('close code : ' + code)
  })
  spawnObject.stderr.on('data', chunk => {
    console.error(chunk.toString())
  })
  spawnObject.on('exit', code => {
    console.log('exit code : ' + code)
  })
}

export default clientCommandHandler
