var student = {
  name: 'Tony',
  class: 'VII',
  city: 'Caracas'
}

student.fullName = student.name
delete student.name

student.fullName = 'Tony Stark'

console.log(student)
