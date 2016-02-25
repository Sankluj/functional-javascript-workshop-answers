function countWords(inputWords) {
  return inputWords.reduce(function (wordsIndex, word) {
    wordsIndex[word] = ++wordsIndex[word] || 1;
    return wordsIndex;
  }, {})
}

module.exports = countWords;
