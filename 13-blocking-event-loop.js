function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return
  setTimeout(operation, Math.random() * 105);
  return repeat(operation, --num)
}

function officialRepeat(operation, num) {
  if (num <= 0) return

  operation()

  // release control every 10 or so
  // iterations.
  // 10 is arbitrary.
  if (num % 10 === 0) {
    setTimeout(function() {
      repeat(operation, --num)
    })
  } else {
    repeat(operation, --num)
  }
}

module.exports = officialRepeat
