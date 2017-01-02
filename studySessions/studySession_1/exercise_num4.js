function sum (num1, num2) {
  return num1 + num2
}

function rest (num1, num2) {
  return num1 - num2
}

function answer (num1, num2) {
  return 'The sum and rest of ' + num1 + ' and ' + num2 + ' is ' + sum(num1, num2) + ' and ' + rest(num1, num2)
}

console.log(answer(7, 3))
