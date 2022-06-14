# Broadcasting WebSocket Server
Send a message and receive it on all other clients.

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
