const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
// const hbs = require('hbs');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public')

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// app.set('view engine', 'hbs');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);

    io.emit('newMessage', {
      from: newMessage.from,
      text: newMessage.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

// app.get('/', (req, res) => {
//   res.render('index.html')
// });

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
