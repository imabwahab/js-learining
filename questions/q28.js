// Show how optional chaining (?.) prevents runtime errors.

const student = {
  name: "Ali Hamza",
  age:20
}
console.log(student?.name);
console.log(student?.age);
console.log(student?.grade);