// Write a prototype method that adds a greet() function to all objects of Person.

class Person {
  eat() {
    console.log("Eating...");
  }
}

// Add greet() to the prototype of Person
Person.prototype.greet = function () {
  console.log("Hello! I am a person.");
}

// Test 
const p1 = new Person();
p1.eat();
p1.greet();

const p2 = new Person()

console.log(p2.__proto__)

const obj = {};
console.log(obj.__proto__);