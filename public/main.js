$(() => {

  const message = $('#chat-message');
  const chat = $('#chat');
  const socket = io();

  message.focus();

  $('#message-box').submit((e) => {

    e.preventDefault();

    // Send the message
    socket.emit('client-message', message.val());
    message.val('');
    // chat.append(`${message.val()}<br>`);
  });

  socket.on('server-message', (data) => {
    chat.append(`${data}<br>`);
  });
});
