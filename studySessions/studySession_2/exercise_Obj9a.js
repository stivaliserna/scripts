function Student (firstName, lastName, classAttend, city, location, studies, description) {
  this.firstName = firstName
  this.lastName = lastName
  this.classAttend = classAttend
  this.city = city
  this.location = location
  this.studies = studies
  this.description = this.firstName + ' studied ' + this.studies + ' in ' + this.city + ', and he attended the class ' + this.classAttend + '. Such a great superhero!'
}

var student1 = new Student('Tony', 'Stark', 'XI', 'NYC', 'USA', 'Electrical Engineering')
var student2 = new Student('Bruce', 'Wayne', 'XIII', 'Gotham', 'USA', 'Criminology')

console.log(Object.values(student1.description).join(''))
console.log(Object.values(student2.description).join(''))
