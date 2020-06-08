/**
 * socket generate
 */
import http from 'http'
import socket, { Server } from 'socket.io'

const socketGenerate = function (serverInstance: http.Server): Promise<Server> {
  return new Promise ((resolve, reject) => {
    try {
      resolve(socket(serverInstance))
    } catch (e) {
      reject(e)
    }
  })
}

export default socketGenerate
