function addUserToList(newClient) {
  const conversationListElem = document.getElementById('conversation-list');
  const conversationElem = document.createElement('div');
  const userImgElem = document.createElement('img');
  const { picID } = newClient;
  const titleTextElem = document.createElement('div');
  const createdDateElem = document.createElement('div');
  const conversationMessageElem = document.createElement('div');

  conversationElem.classList.add('conversation');
  userImgElem.src = `https://picsum.photos/seed/${picID}/50/50`;
  titleTextElem.classList.add('title-text');
  titleTextElem.innerHTML = newClient.nickname;
  createdDateElem.classList.add('created-date');
  createdDateElem.innerHTML = newClient.connectionTime;
  conversationMessageElem.classList.add('conversation-message');
  conversationMessageElem.innerHTML = '...';

  conversationElem.appendChild(userImgElem);
  conversationElem.appendChild(titleTextElem);
  conversationElem.appendChild(createdDateElem);
  conversationElem.appendChild(conversationMessageElem);

  conversationListElem.appendChild(conversationElem);
}
