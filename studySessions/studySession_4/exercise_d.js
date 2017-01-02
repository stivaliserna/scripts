function newPosition (num) {
  num = num.toString()
  for (var i = 0; i < num.length; i++) {
    console.log(num)
    num = num.replace(/^(\d)(.*)$/, '$2$1')
  }
}

newPosition(3712)
