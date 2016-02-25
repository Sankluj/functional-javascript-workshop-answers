module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function (mappedArray, item, index, arr) {
    mappedArray.push(fn.call(thisArg, item, index, arr));
    return mappedArray;
  }, []);
};
