// =============================================
// Classes in TypeScript
// =============================================

// 1. Introduction
// ---------------
// - A class is a blueprint for creating objects.
// - TypeScript adds strong typing + visibility modifiers (public, private, protected).
// - Members (properties & methods) must follow declared types.


// 2. Basic Class Example
class Person {
  name: string; // property must be a string
  constructor(name:string){
    this.name = name ;
  }
}

const person = new Person("Hamza");
person.name = "Jane";
console.log(person.name); // "Jane"


// 3. Visibility Modifiers
// -----------------------
// - public (default): Accessible everywhere
// - private: Accessible only within the class
// - protected: Accessible in class + subclasses

class Person2 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("Alice");
console.log(person2.getName()); // "Alice"
// person2.name ❌ Error: private


// 4. Parameter Properties
// -----------------------
// Shortcut: define & assign properties directly in constructor.

class Person3 {
  constructor(private name: string, public age: number) {}

  getName(): string {
    return this.name;
  }
}

const person3 = new Person3("Bob", 22);
console.log(person3.getName()); // "Bob"
console.log(person3.age);       // 22


// 5. readonly Properties
// ----------------------
// Cannot be reassigned after initialization.

class Car {
  readonly brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const car = new Car("Toyota");
// car.brand = "Honda"; ❌ Error: Cannot assign to readonly


// 6. Inheritance
// --------------
// Classes can extend other classes.

class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move(); // "Moving..."
dog.bark(); // "Woof!"


// 7. Method Override
// ------------------
// A subclass can override methods from the parent class.

class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  override greet() { // "override" ensures a method truly overrides
    console.log("Hello from Child");
  }
}

new Child().greet(); // "Hello from Child"


// 8. Abstract Classes
// -------------------
// - Cannot be instantiated directly.
// - Can define abstract methods (must be implemented by subclasses).

abstract class Shape {
  abstract getArea(): number; // no body here
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(10);
console.log(circle.getArea()); // 314.159...


// 9. Implements (Interfaces with Classes)
// ---------------------------------------
// Classes can "implement" interfaces, enforcing structure.

interface Printable {
  print(): void;
}

class Book implements Printable {
  constructor(private title: string) {}

  print(): void {
    console.log(`Book: ${this.title}`);
  }
}

new Book("TS Handbook").print(); // "Book: TS Handbook"

export {}