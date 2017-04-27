const people = [
  { name: 'wes', year: 1998},
  { name: 'Kait', year: 1986},
  { name: 'Irv', year: 1970},
  { name: 'Lux', year: 2015}
]

const comments = [
  {text: 'Love this!', id: 523423},
  {text: 'Super good', id: 823423},
  {text: 'You are the best', id: 2039842},
  {text: 'Ramen is my fav food ever', id: 123523},
  {text: 'Nice Nice Nice!', id: 542328},
]

// Is at least one persone 19? - some

let currentYear = (new Date()).getFullYear()
let isAdult = people.some(person => {
  return currentYear - person.year >= 19
})

console.log(isAdult)

// Is everyone 19? - every

let currentYear = (new Date()).getFullYear()
let allAdults = people.every(person => {
  return currentYear - person.year >= 19
})

console.log(allAdults)

//Find the comment with the ID of  823423 - find

let findID = comments.find(comment => comment.id === 823423)

console.log(findID)

// Find the comment with this ID 2039842 - findIndex

let indexOf = comments.findIndex(comment => comment.id === 2039842)

console.log(indexOf)

// Delete the comment with the ID of 823423 - findIndex

let indexOf = comments.findIndex(comment => comment.id === 823423)

let remove = comments.splice(indexOf, 1)

console.log(remove)