function encrypt (message) {
  var result = ''
  var middle = Math.floor(message.length / 2)
  var isOdd = message.length % 2

  for (var i = 0; i < middle; i++) {
    result += message[i]
    result += message[middle + i]
  }

  if (isOdd) {
    result += message[message.length - 1]
  }

  return result
}

function decrypt (message) {
  var odds = ''
  var even = ''

  for (var i = 0; i < message.length; i++) {
    if (i % 2 === 0) {
      if (i === message.length - 1) {
        odds += message[i]
      } else {
        even += message[i]
      }
    } else {
      odds += message[i]
    }
  }

  return even + odds
}

console.log(encrypt('SKYLAB'))
console.log(decrypt(encrypt('SKYLAB')))
