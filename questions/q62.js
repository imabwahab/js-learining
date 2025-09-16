// Add private properties to a class using #.

class Animal {
  #category = "Animal";
  constructor(name) {
    this.name = name;
  }
  getCategory() {
    return this.#category; F
  }
  speak() {
    console.log(`${this.#category}: ${this.name} is speaking. `);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

let dog1 = new Dog("Rex");
dog1.speak();
// dog1.category; // not accessible because of private datatype.
console.log(dog1.getCategory())
