function sum (num1, num2) {
  return num1 + num2
}

function rest (num1, num2) {
  return num1 - num2
}

function multiply (num1, num2) {
  return num1 * num2
}

function division (num1, num2) {
  return (num1 / num2).toFixed(2)
}

function answer (num1, num2) {
  return sum(num1, num2) + ', ' + rest(num1, num2) + ', ' + multiply(num1, num2) + ' and ' + division(num1, num2)
}

function getRandomInt () {
  let min = Number.MIN_SAFE_INTEGER
  let max = Number.MAX_SAFE_INTEGER
  return Math.floor(Math.random() * (max - min)) + min
}

console.log(answer(getRandomInt(), getRandomInt()))
