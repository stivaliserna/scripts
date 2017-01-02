function Student (firstName, lastName, classAttend, city, location, studies, description) {
  this.firstName = firstName
  this.lastName = lastName
  this.classAttend = classAttend
  this.city = city
  this.location = location
  this.studies = studies
}

var student1 = new Student('Tony', 'Stark', 'XI', 'NYC', 'USA', 'Electrical Engineering')
var student2 = new Student('Bruce', 'Wayne', 'XIII', 'Gotham', 'USA', 'Criminology')
var student3 = new Student('Cesar', 'Solorzano', '2012', 'Maracay', 'Venezuela', 'Networks and Communications')
var student4 = new Student('Stivali', 'Serna', '2012', 'Valencia', 'Venezuela', 'Industrial Engineering')

console.log(Object.values(student1).join(', '))
console.log(Object.values(student2).join(', '))
console.log(Object.values(student3).join(', '))
console.log(Object.values(student4).join(', '))
