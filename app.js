const http = require('http');
const express = require('express');
const io = require('socket.io')();

const app = express();


const server = http.createServer(app);
/*
app.get('/', (req, res) => {
  res.end('Chat started');
});
*/

app.set('port', 3000);
app.use(express.static(`${__dirname}/public`)); // Serve to client the files in public directory inside the directory of the project.

server.listen(app.get('port'), () => {
  console.log('Server started');
});

io.listen(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('client-message', (data) => {
    io.emit('server-message', data);
  });

});
