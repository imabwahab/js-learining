// Create an object without __proto__ and add methods to it.

const obj = Object.create(null);

// Add methods to it
obj.sayHello = function () {
  console.log("Hello from a prototype-less object!");
};

obj.add = function (a, b) {
  return a + b;
};

obj.sayHello();
console.log(obj.add(2, 4));

// Check that __proto__ is undefined.
console.log(obj.__proto__);