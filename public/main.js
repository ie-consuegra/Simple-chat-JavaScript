$(() => {

  const message = $('#chat-message');
  const chat = $('#chat');
  const socket = io();

  message.focus();

  $('#message-box').submit((e) => {

    e.preventDefault();
    chat.append(`${message.val()}<br>`);
  });
});
