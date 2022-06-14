# Broadcasting WebSocket Server
Send a message and receive it on all other clients NOT on the one who sent it. 

To change this change line 21 - server.js:

`if (client !== ws && client.readyState === WebSocket.OPEN) {` -> `if (client.readyState === WebSocket.OPEN) {`

## Development Setup
Create a fork of this repo on GitHub
```
npm install
npm run server
```
The server runs default on port `3000`, can be changed through the use of the `PORT` env variable.
The main code can be found inside `server.js`.

## Deployment on Heroku
1. Create new Heroku App (set region to EU, no pipeline)
2. Clone/Fork this repo on GitHub (if not already done)
3. Add deployment method "Connect to GitHub" and choose your forked repo
4. Deploy manually, then enable automatic deployment 
5. Find your domains under Settings
6. You should now be able to connect to your Websocket server via: `wss://{your domain}` (don't forget to replace the `https://` with `wss://`)

## Testing with Postman
You can use https://www.postman.com/ to manually test your server and send messages.

Here is a tutorial on how to do so:
https://learning.postman.com/docs/sending-requests/supported-api-frameworks/websocket/

## Usage with P5
Here is a simple way on how to use WebSocket with p5:
https://github.com/abachman/p5.websocket

To make their example work as expected you have to make minor tweaks:
1. Don't forget to change your WebSocket Server URL (line 12 - sketch.js (client app))
2. Update the if function of your broadcasting Server (line 21 - server.js (server app)) from:
   `if (client !== ws && client.readyState === WebSocket.OPEN) {`
   to `if (client.readyState === WebSocket.OPEN) {` otherwise you can only see your drawing on the other clients.
