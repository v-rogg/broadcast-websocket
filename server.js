const express = require('express')
const { Server, WebSocket } = require('ws')
const isValidUTF8 = require('utf-8-validate');

const PORT = process.env.PORT || 3000
const INDEX = '/index.html'

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

const wss = new Server({ server })
wss.on('connection', (ws) => {
  console.log('Client connected')
  ws.on('close', () => console.log('Client disconnected'))

  ws.on('message', (data, isBinary) => {
    console.log('Received: %s', data)
    if (isValidUTF8(data)) {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data, { binary: isBinary });
        }
      });
    }
  })
})
