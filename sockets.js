const io = require('socket.io')();

module.exports = (server) => {
  io.listen(server);

  io.on('connection', (socket) => {
    socket.on('client-message', (data) => {
      io.emit('server-message', data);
    });
  });
};
