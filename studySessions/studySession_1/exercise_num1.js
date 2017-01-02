function getHumanTime () {
  var now = new Date()
  var hour = now.getHours()
  var minutes = now.getMinutes()
  var timeOfDay = 'morning'

  if (hour >= 12) timeOfDay = 'afternoon'
  if (hour >= 19) timeOfDay = 'night'

  if (hour > 12) hour = hour - 12

  return 'It\'s ' + hour + ':' + minutes + ' of ' + timeOfDay
}

getHumanTime()
