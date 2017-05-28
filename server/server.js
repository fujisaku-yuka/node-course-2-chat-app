const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
// const hbs = require('hbs');

const {generateMessage} = require('./utils/message')
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public')

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// app.set('view engine', 'hbs');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user join'));

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);

    io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
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
