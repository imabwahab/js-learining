// Write program to merge two objects using spread syntax.

const obj1 = {
  name: 'Ali',
  age: 20,
  grade: 'A+'
}
console.log(obj1)

const obj2 = {
  name: "Hamza",
  age: 22,
  grade: 'B'
}
console.log(obj2)

const obj3 = [{ ...obj1, ...obj2 }];

console.log(obj3)

// if both objects have the same property name, the value from the second object (obj2) will overwrite the one from the first (obj1).