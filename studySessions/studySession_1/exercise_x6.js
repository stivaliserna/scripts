function compareDate (date) {
  var now = new Date()
  var someday = new Date(date.toString())

  if (Number.isNaN(someday.getTime())) return 'This is not a year'

  now = now.getUTCFullYear()
  someday = someday.getUTCFullYear()

  if (now > someday) {
    return date + ' is before now'
  } else if (now < someday) {
    return date + ' is after now'
  } else if (now === someday) {
    return date + ' is now'
  }
}

[1987, 2980, 2016, 1098, 'asdasd'].forEach(function (date) {
  console.log(compareDate(date))
})
