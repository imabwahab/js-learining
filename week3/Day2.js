// Prototypes and Inheritance 
let animal = { eats: true };
let rabbit = { jumps: true, __proto__: animal };
console.log(rabbit.eats);

// Prototypal Inheritance (Object.create) (Modern)
let person = { canTalk: true };
let student = Object.create(person);

student.studies = true;
console.log(student.canTalk);

// Native Prototypes
let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);

//F.prototype 
function Ani (name){this.name = name;}
Ani.prototype.speak = function(){
  console.log(this.name + "Makes a sound");
}

let dog = new Ani("Rex");
dog.speak(); // Rex makes a sound