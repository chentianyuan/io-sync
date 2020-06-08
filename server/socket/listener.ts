/**
 * 事件监听
 */

import { Server } from 'socket.io'
import clientCommandHandler  from './handler/client-command'

const ON_CONNECT_EVENT = 'connection'
const ON_DISCONNECT_EVENT = 'disconnect'
const ON_CLIENT_COMMAND_EVENT = 'client command'

export default function listenerGenerate (socketIO: Server) {
  socketIO.on(ON_CONNECT_EVENT, socket => {
    console.log('connection success!')

    socket.on(ON_CLIENT_COMMAND_EVENT, msg => clientCommandHandler(msg, socket))

    socket.on(ON_DISCONNECT_EVENT, () => {
      console.log('connection has been closed !')
    })
  })
}
