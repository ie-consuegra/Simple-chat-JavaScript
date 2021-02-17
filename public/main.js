$(() => {

  const message = $('#chat-message-text');
  const chatForm = $('#chat-form');
  const socket = io();

  const user = prompt('Set your nickname');

  const getTime = () => {
    const d = new Date();
    return `${d.getHours()}:${d.getMinutes()}`;
  };

  if (user) {
    const client = {
      nickname: user,
      connectionTime: getTime(),
      picID: user.split(' ')[0],
    };
    socket.emit('new-client-connected', client);
  }

  const messagePackage = {};
  message.focus();


  chatForm.submit((e) => {
    e.preventDefault();

    messagePackage.who = user;
    messagePackage.what = message.val();
    messagePackage.when = getTime();

    // Send the message
    socket.emit('client-message', messagePackage);
    message.val('');

  });

  socket.on('server-message', (data) => {
    addMessageToList(user, data);
  });

  socket.on('server-new-client', (newClient) => {
    addUserToList(newClient);
  });
});
