(function animateMessages() {
  const messages = document.querySelectorAll('.message-wrap');
  let currentIndex = 0;
  appear(messages[currentIndex]);

  messages.forEach((message) => message.addEventListener('animationend', (e) => {
    message.classList.remove('appear-left');
    message.classList.remove('appear-right');
    message.classList.add('visible');

    currentIndex += 1;
    const nextMessage = messages[currentIndex];

    if (nextMessage) appear(nextMessage);
  }));

  function appear(node) {
    const newClass = node.classList.contains('left') ? 'appear-left' : 'appear-right';
    node.classList.add(newClass);
  }
}());
