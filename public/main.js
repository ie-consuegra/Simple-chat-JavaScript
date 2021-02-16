$(() => {

  const message = $('#chat-message-text');
  const chat = $('#chat-message-list');
  const chatForm = $('#chat-form');
  const socket = io();

  message.focus();

  chatForm.submit((e) => {
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
