const WebSocketServer = require('websocket').server;
const http = require('http');
const Message = require('./models/Message.model');
const User = require('./models/User.model');

const webSocketsServerPort = 4000;

const chat = [];
const users = []; // we will store the data of all the users that has used the chat
const activeUsers = []; // to display only the currently logged in users
const connections = []; // to keep all active connection objects

const server = http.createServer(() => {});

server.listen(webSocketsServerPort, () => {
  console.log(' Server is listening on port ' + webSocketsServerPort);
});

const wsServer = new WebSocketServer({
  httpServer: server,
});

wsServer.on('request', request => {
  console.log(' Connection from origin ' + request.origin + '.');

  const connection = request.accept(null, request.origin);

  connections.push(connection); // register new connection

  const user = new User({
    name: null,
    userName: null,
  });

  const index = users.push(user) - 1; // used to handle user disconnect
  activeUsers.push(user);

  console.log('New user connected');

  connection.sendUTF(JSON.stringify({ type: 'history', chat, activeUsers }));

  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      // accept only text
      // first message sent is user data

      const data = JSON.parse(message.utf8Data);

      const { author, content } = data;
      const dateAdded = new Date();

      if (!user.userName) {
        user.userName = author;
        console.log('A new user set name to: ' + user.userName);
      } else {
        const message = new Message({
          author,
          content,
          id: index,
          dateAdded,
        });

        chat.push(message);
        // broadcast message to all connected users
        connections.forEach(user => {
          user.sendUTF(JSON.stringify({ type: 'history', chat, activeUsers }));
        });
      }
    }
  });

  // user disconnected
  connection.on('close', () => {
    if (!user.userName) {
      users.splice(index, 1);
      connections.splice(index, 1);
    }
  });
});
