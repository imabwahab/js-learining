// Demonstrate inheritence using prototype chains.

function Person(name, age) {
  this.name = name;
  this.age = age
}

Person.prototype.greet = function () {
  console.log(`Hello, my name i ${this.name} and I am ${this.age} years old.`);
}

// Child constructor
function Student(name, age, grade){
  Person.call(this, name, age);
  this.grade = grade;
}

// Inherit from Person 
Student.prototype = Object.create(Person.prototype);

// Fix the constructor property
Student.prototype.constructor = Student;

// Add method to Student
Student.prototype.study = function (){
  console.log(`${this.name} is studying in grade ${this.grade}`);
}

// Usage
const student1 = new Student("Alice", 15, 10);
student1.greet();  // Inherited from Person
student1.study();  // Defined in Student

console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true