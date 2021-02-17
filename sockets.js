const io = require('socket.io')();

module.exports = (server) => {
  io.listen(server);

  io.on('connection', (socket) => {
    socket.on('client-message', (data) => {
      io.emit('server-message', data);
    });
    socket.on('new-client-connected', (data) => {
      io.emit('server-new-client', data);
    });
  });
};
