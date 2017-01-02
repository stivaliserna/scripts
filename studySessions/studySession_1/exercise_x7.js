var people = [
  {
    name: 'David',
    city: 'New York',
    birthday: new Date('1982-03-15')
  },
  {
    name: 'Silvia',
    city: 'Madrid',
    birthday: new Date('2001-09-19')
  },
  {
    name: 'Alex',
    city: 'Toronto',
    birthday: new Date('2013-12-01')
  },
  {
    name: 'Ferran',
    city: 'Caracas',
    birthday: new Date('1926-06-12')
  },
  {
    name: 'Stivali',
    city: 'Valencia',
    birthday: new Date('1995-08-25')
  }
]

people.sort(function (a, b) {
  return a.birthday.getTime() - b.birthday.getTime()
})

console.log(people)

console.log('El mas viejo es ' + people[0].name)
console.log('El mas joven es ' + people[people.length - 1].name)

function compareDate (dateA, dateB) {
  if (Number.isNaN(dateA.getTime())) return 'Date A is not a year'
  if (Number.isNaN(dateB.getTime())) return 'Date B is not a year'

  var dateBYear = dateB.getUTCFullYear()
  var dateAYear = dateA.getUTCFullYear()

  if (dateBYear > dateAYear) {
    return dateA + ' is before ' + dateB
  } else if (dateBYear < dateAYear) {
    return dateA + ' is after ' + dateB
  } else if (dateBYear === dateAYear) {
    return dateA + ' is ' + dateB
  }
}

[1987, 2980, 2016, 1098, 'asdasd'].forEach(function (date) {
  console.log(compareDate(new Date(date.toString()), new Date()))
})
