function duckCount() {
  return Array.prototype.reduce.call(arguments, function (duckCounter, object) {
    return Object.prototype.hasOwnProperty.call(object, 'quack') ? ++duckCounter : duckCounter;
  }, 0);
}

function duckCountOfficial() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount;
