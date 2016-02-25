function Spy(target, method) {
  var result = {count: 0};
  var originalFunction = target[method];

  target[method] = function () {
    result.count++;
    return originalFunction.apply(target, arguments);
  }.bind(this);

  return result;
}

module.exports = Spy
