function getMyBirthday () {
  var today = new Date('2016-11-15').getTime()

  var myBirthday = new Date('1995-08-25').getTime()

  today - myBirthday

  return (today - myBirthday) / 1000 / 60 / 60 / 24
}

getMyBirthday()
