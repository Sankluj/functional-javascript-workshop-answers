function getShortMessages(messages) {
  return messages
    .map(function(messageObj) {
      return messageObj.message;
    })
    .filter(function (message) {
      return message.length < 50 ? true : false;
    });
}

module.exports = getShortMessages;
