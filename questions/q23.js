// Demonstrate the difference between copying objects by reference and by value

// copying by reference
const student = {
  name: 'Ali',
  age: 21,
  grade: 'A+'
}

const student2 = student;
student2.name = "Ali Hamza";
console.log(student);

// copying by value

const student3 = { ...student };

student3.name = 'Zain';
console.log(student3.name);
console.log(student.name)