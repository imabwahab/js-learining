// =============================================
// Type Aliases in TypeScript
// =============================================

// 1. What are Type Aliases?
// -------------------------
// A Type Alias allows you to give a custom name to a type.
// Useful for simplifying complex types or reusing types across your code.

type CarYear = number;
type CarType = string;
type CarModel = string;

// Using type aliases inside another type
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const car: Car = {
  year: 2021,
  type: "Toyota",
  model: "Corolla",
};


// 2. Aliases for Primitives
// -------------------------
// You can create aliases for primitive types to improve readability.

type ID = number | string;

let userId1: ID = 101;   // ✅ number
let userId2: ID = "A12"; // ✅ string
// let userId3: ID = true; // ❌ Error: boolean not allowed


// 3. Aliases for Objects
// ----------------------

type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // optional property
};

const user1: User = { name: "Alice", age: 25 };
const user2: User = { name: "Bob", age: 30, isAdmin: true };


// 4. Aliases for Functions
// -------------------------
// Type aliases can describe function signatures.

type AddFn = (a: number, b: number) => number;

const add: AddFn = (x, y) => x + y;


// 5. Aliases with Union & Intersection Types
// ------------------------------------------

type Status = "success" | "error" | "loading";

let status1: Status = "success"; // ✅
// let status2: Status = "failed"; // ❌ Error

// Intersection example
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;

const staff1: Staff = { name: "Alice", id: 101 };


// 6. Aliases with Arrays & Tuples
// --------------------------------

type StringArray = string[];
type Point = [number, number];

const fruits: StringArray = ["Apple", "Mango"];
const coordinate: Point = [10, 20];


// 7. Difference Between Type Aliases and Interfaces
// -------------------------------------------------
// - Both can define object shapes.
// - Interfaces are extendable (preferred for OOP patterns).
// - Type aliases are more flexible (can define unions, primitives, tuples, etc.).

type Animal = { name: string };
interface IAnimal { name: string }

// Both valid:
const dog: Animal = { name: "Dog" };
const cat: IAnimal = { name: "Cat" };


export {};
