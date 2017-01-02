function comparator () {
  var now = new Date(2016, 11, 15).getTime()

  var someday = new Date(1986, 5, 10).getTime()

  if (now > someday) {
    console.log('Today is after someday')
  } else {
    console.log('Today is before someday')
  }
}

comparator()
