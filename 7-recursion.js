// function reduce(arr, fn, initial) {
//   this.i = this.i || 0;
//
//   if (this.i === arr.length) {
//     return initial;
//   } else {
//     initial = fn(initial, arr[this.i], this.i, arr)
//     this.i++;
//     return reduce(arr, fn, initial);
//   }
// }

// function reduce(arr, fn, initial) {
//   var reduceOne = function (index, value) {
//     if (index === arr.length) {
//       return value;
//     } else {
//       return reduceOne(index + 1, fn(value, arr[index], index, arr));
//     }
//   }
//
//   return reduceOne(0, initial);
// }

function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index === arr.length) {
      return value;
    } else {
      return reduceOne(index + 1, fn(value, arr[index], index, arr));
    }
  })(0, initial);
}

module.exports = reduce;
