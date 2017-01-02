function getHumanTimeWithoutMinutes () {
  var now = new Date()
  var hour = now.getHours()
  var minutes = now.getMinutes()
  var timeOfDay = 'morning'

  if (minutes >= 30) hour++

  if (hour === 12) timeOfDay = 'noon'
  if (hour > 12) timeOfDay = 'afternoon'
  if (hour > 18) timeOfDay = 'night'

  if (hour > 12) hour = hour - 12

  return 'It\'s around ' + hour + ' of ' + timeOfDay
}

getHumanTimeWithoutMinutes()
