// =============================================
// Interfaces in TypeScript
// =============================================

// 1. What is an Interface?
// -------------------------
// An interface defines the shape of an object.
// Unlike type aliases, interfaces only apply to object types.

interface Rectangle {
  height: number;
  width: number;
}

const rect: Rectangle = {
  height: 20,
  width: 10,
};


// 2. Optional and Readonly Properties
// -----------------------------------

interface Car {
  readonly brand: string; // cannot be changed after initialization
  model: string;
  mileage?: number;       // optional property
}

const car: Car = { brand: "Toyota", model: "Corolla" };
car.model = "Yaris"; // ✅ allowed
// car.brand = "Honda"; // ❌ Error: brand is readonly


// 3. Interface Merging
// --------------------
// If an interface is declared multiple times,
// TypeScript merges them automatically.

interface Animal {
  name: string;
}
interface Animal {
  age: number;
}

const dog: Animal = { name: "Buddy", age: 5 };


// 4. Extending Interfaces
// -----------------------
// One interface can extend another, inheriting its properties.

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRect: ColoredRectangle = {
  height: 15,
  width: 25,
  color: "blue",
};


// 5. Interfaces with Methods
// --------------------------
// Interfaces can describe object methods.

interface Person {
  name: string;
  greet(): string;
}

const person: Person = {
  name: "Alice",
  greet: () => `Hello, my name is Alice`,
};


// 6. Interfaces with Index Signatures
// -----------------------------------
// When property names are unknown ahead of time.

interface StringMap {
  [key: string]: string;
}

const colors: StringMap = {
  primary: "red",
  secondary: "green",
};


// 7. Interfaces with Function Types
// ---------------------------------

interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (x, y) => x + y;


// 8. Interfaces with Classes (implements)
// ---------------------------------------
// Classes can implement one or more interfaces.

interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(10);
console.log(circle.area()); // 314.159...


// 9. Interfaces vs Type Aliases
// ------------------------------
// - Interfaces: Only for objects, support declaration merging, extendable.
// - Type aliases: Can represent objects, unions, intersections, primitives, tuples, etc.
// - Classes can "implement" both.
// Recommendation: 
//    Use `interface` for object shapes.
//    Use `type` for unions, intersections, or non-object definitions.


export {};
