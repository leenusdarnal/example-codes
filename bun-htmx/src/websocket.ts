import { type ServeOptions } from 'bun'
Bun.serve({
  fetch(request, server) {
    if (server.upgrade(request)) {
      return
    }
    return new Response('upgrade failed', { status: 500 })
  },
  websocket: {
    open() {
      console.log('A new CLient')
    },
    message(ws, message) {
      console.log(message)
      ws.sendText('Hello from Bun websocket')
    },
  },
})
