// Add a method getDetails() to student that returns a formatted string.

const student = {
  name: 'Ali',
  age: 21,
  grade: 'A+',
  getDetails: function () {
    return (`Name is ${this.name}, age is ${this.age}, and greade is ${this.grade}.`)
  }
}

console.log(student.getDetails());