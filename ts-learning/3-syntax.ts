// =============================================
// TypeScript Syntax Basics
// =============================================

// Type Annotations
let username: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Objects
let person: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};

// Interfaces
interface User {
  id: number;
  name: string;
}
let user: User = { id: 1, name: "Bob" };

// Functions
function add(a: number, b: number): number {
  return a + b;
}

// Generics (intro)
function identity<T>(value: T): T {
  return value;
}
let result = identity<string>("Hello");


export {}