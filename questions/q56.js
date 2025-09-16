// Show how to make an object property non-writable using descriptors.

const student = {}

// Defind name property that is non-writable 

Object.defineProperty(student, 'name', {
  value: "AbdulWahab",
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(student);

// Try to change the value
student.name = "Ali";

console.log(student);