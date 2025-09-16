// Advanced working with functions

function counter() {
  return counter.count++;
}
counter.count = 0;
console.log(counter());
console.log(counter());

// The Old var

if (true) {
  var x = 5;
}
//console.log(x);

// Scheduling : setTimeout & setInterval

setTimeout(() => console.log("Runs once after 1s"), 1000);

let id = setInterval(() => console.log("Repeats every 2s"), 2000);
setTimeout(() => clearInterval(id), 7000);


// arrow functions revisited
let obj = {
  name: "JS",
  show() {
    setTimeout(() => console.log(this.name), 1000);
  }
};

obj.show();


// Object Properties Configuration
let user = { name: "Ali" };
Object.defineProperty(user, "name", { writable: false });
user.name = "Wahab";
console.log(user.name);

// Property flags and Descriptors
let us = { age: 21 };
console.log(Object.getOwnPropertyDescriptor(us, "age"));


// Getters and Setters
let user1 = {
  first: "Abdul",
  last: "Wahab",
  get fullName() { return this.first + " " + this.last; },
  set fullName(val) { [this.first, this.last] = val.split(" "); }
};
console.log(user1.fullName); // Abdul Wahab
user1.fullName = "Ali Khan";
console.log(user1.first); // Ali


