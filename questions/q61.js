// Write a class Animal with speak() method and extend it with a Dog class.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is speaking.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

const dog1 = new Dog('Rex');
dog1.speak();