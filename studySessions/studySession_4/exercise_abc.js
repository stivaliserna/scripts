function fib (limit) {
  var previous = 0
  var current = 1
  var next

  console.log('0: 0')
  for (var i = 1; i <= limit; i++) {
    console.log(i + ': ' + current)
    next = previous + current
    previous = current
    current = next
  }
}

fib(10)
