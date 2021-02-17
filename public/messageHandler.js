// Two args: who and what
function addMessageToList(who, messagePackage) {
  const messageList = document.getElementById('chat-message-list');
  const messageRowElem = document.createElement('div');
  const messageContentElem = document.createElement('div');
  const imageElem = document.createElement('img');
  const messageTextElem = document.createElement('div');
  const messageTimeElem = document.createElement('div');
  const picID = messagePackage.who.split(' ')[0];

  messageRowElem.classList.add('message-row');
  messageTextElem.classList.add('message-text');
  messageContentElem.classList.add('message-content');
  messageTimeElem.classList.add('message-time');

  messageContentElem.appendChild(imageElem);
  messageContentElem.appendChild(messageTextElem);
  messageContentElem.appendChild(messageTimeElem);

  messageRowElem.appendChild(messageContentElem);

  if (messagePackage.who === who) {
    messageRowElem.classList.add('you-message');
  } else {
    imageElem.src = `https://picsum.photos/seed/${picID}/50/50`;
    messageRowElem.classList.add('other-message');
  }

  messageTextElem.innerHTML = messagePackage.what;
  messageTimeElem.innerHTML = messagePackage.when;

  messageList.insertBefore(messageRowElem, messageList.childNodes[0]);
}
