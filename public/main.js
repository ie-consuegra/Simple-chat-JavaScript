$(() => {

  const message = $('#chat-message-text');
  const chat = $('#chat-message-list');
  const chatForm = $('#chat-form');
  const socket = io();

  const user = prompt('Set your nickname');

  const messagePackage = {};
  message.focus();

  const getTime = () => {
    const d = new Date();
    return `${d.getHours()}:${d.getMinutes()}`;
  };

  chatForm.submit((e) => {
    e.preventDefault();

    messagePackage.who = user;
    messagePackage.what = message.val();
    messagePackage.when = getTime();

    // Send the message
    socket.emit('client-message', messagePackage);
    message.val('');

    // chat.append(`${message.val()}<br>`);
  });

  socket.on('server-message', (data) => {
    addMessageToList(user, data);
    // chat.append(`${data}<br>`);
  });
});
