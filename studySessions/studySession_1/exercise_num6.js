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

console.log(answer(7, 3))
