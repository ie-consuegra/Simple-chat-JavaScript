// Two args: who and what
function addMessageToList(who, messagePackage) {
  const messageList = document.getElementById('chat-message-list');
  const messageRowElem = document.createElement('div');
  const messageContentElem = document.createElement('div');
  const imageElem = document.createElement('img');
  const messageTextElem = document.createElement('div');
  const messageTimeElem = document.createElement('div');

  messageRowElem.classList.add('message-row');
  messageTextElem.classList.add('message-text');
  messageContentElem.classList.add('message-content');
  messageTimeElem.classList.add('message-time');

  messageContentElem.appendChild(imageElem);
  messageContentElem.appendChild(messageTextElem);
  messageContentElem.appendChild(messageTimeElem);

  messageRowElem.appendChild(messageContentElem);
  // messageRowElem.appendChild(messageContentElem);

  if (messagePackage.who === who) {
    messageRowElem.classList.add('you-message');
  } else {
    messageRowElem.classList.add('other-message');
  }

  messageTextElem.innerHTML = messagePackage.what;
  messageTimeElem.innerHTML = messagePackage.when;

  messageList.insertBefore(messageRowElem, messageList.childNodes[0]);
}
