// Classes

class User {
  constructor(name) { this.name = name };
  greet() { console.log(`Hello, ${this.name}`) }
}

new User("Wahab").greet();

// Private & Protected

class Car {
  #engine = "V8";
  _mileage = 100;
  showEngine() { console.log(this.#engine) }
}

let c = new Car();
c.showEngine();
console.log(c._mileage);

// instanceof
class Person { }
let p = new Person();
console.log(p instanceof Person)
console.log(p instanceof Object)


// Class Inheritance
class Animal {
  constructor(name) { this.name = name; }
  speak() {
    console.log(this.name + "makes a sound");
  }
}
class Dog extends Animal {
  speak() { console.log(this.name + "barks") }
}

// Technique to add reusable methods into classes
let canEat = { eat() { console.log("Eating..."); } };
class Human { }
Object.assign(Human.prototype, canEat);
new Human().eat();

// Static Properties and Methods
class mathUtil {
  static PI = 3.14;
  static add(a, b) { return a + b }
}

console.log(mathUtil.add(2, 3));
console.log(mathUtil.PI);