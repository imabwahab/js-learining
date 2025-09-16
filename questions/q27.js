// Convert and object into an array of [key, value] pairs.

const student = {
  name: "Abdul Wahab",
  age: 20,
  grade: 'A+'
}

const array = Object.entries(student);

console.log(array);