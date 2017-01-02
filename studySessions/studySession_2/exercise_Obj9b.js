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
var student3 = new Student('Cesar', 'Solorzano', '2012', 'Valencia', 'Venezuela', 'Networks and Communications')

console.log(Object.values(student3.firstName + student3.studies + student3.city).join())
