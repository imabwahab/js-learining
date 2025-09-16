// Write a function that destructures an object and prints its properties.

let student = {
  name: 'Abdul wahab',
  grade : 'A+',
  age:20
}

const {name, grade, age} = student;

console.log(name, grade, age);

// directly destructuring in function parameters.
function printDetails({ name, grade, age }) {
  console.log(name, grade, age);
}

printDetails(student); // Output: Abdul Wahab A+ 20

