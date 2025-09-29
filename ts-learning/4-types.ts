// =============================================
// TypeScript Types Guide
// =============================================

// 1. Explicit Typing vs Type Inference
// ---------------------------------------------
// Explicit Typing: we declare the type of a variable.
// Type Inference: TypeScript automatically infers the type
// based on the assigned value.

// ✅ Use explicit types for:
//   - Function parameters and return types
//   - Object literals
//   - When the initial value might not be the final type
//
// ✅ Use inference for:
//   - Simple variable declarations with immediate assignment
//   - When the type is obvious from the context


// =============================================
// Basic Explicit Types
// =============================================

// String
let greeting: string = "Hello, TypeScript";
// greeting = 42; // ❌ Error: Type 'number' is not assignable to 'string'

// Number
let userCount: number = 43;

// Boolean
let isLoading: boolean = true;

// Array of numbers
let scores: number[] = [100, 95, 98];

// Tuple (fixed-length, ordered array with specific types)
let tuple: [string, number];
tuple = ["hello", 42]; // ✅
// tuple = [42, "hello"]; // ❌ Wrong order


// =============================================
// Type Inference
// =============================================

let username = "alice"; // inferred as string
let score = 100;        // inferred as number
let flags = [true, false, true]; // inferred as boolean[]


// =============================================
// Special Types
// =============================================

// --- any ---
// Skips type checking entirely.
let v: any = true;
v = "string"; // ✅ no error
Math.round(v); // ✅ no error

// When to use any:
// - Migrating JavaScript code to TypeScript
// - Working with dynamic content where type is unknown
// - When you want to temporarily opt out of type checking


// --- unknown ---
// Type-safe counterpart of 'any'.
let w: unknown = 1;
w = "string"; // ✅ no error
// console.log(w.toUpperCase()); // ❌ Error
if (typeof w === "string") {
  console.log(w.toUpperCase()); // ✅ Safe
}

// --- void ---
// Used when a function does not return a value.
function logMessage(msg: string): void {
  console.log(msg);
}

// --- never ---
// Represents values that never occur.
function fail(msg: string): never {
  throw new Error(msg);
}
// Typical use cases: errors, infinite loops, exhaustive checks


// =============================================
// Null and Undefined
// =============================================

let n: null = null;
let u: undefined = undefined;


// =============================================
// Object
// =============================================

let person: object = { name: "Alice" };
// person.name // ❌ Error, use type/interface for better typing


// =============================================
// Enums
// =============================================

enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;


// =============================================
// Literal Types
// =============================================

let status: "success" | "error" | "loading";
status = "success"; // ✅
// status = "failed"; // ❌ not assignable


// =============================================
// Union and Intersection
// =============================================

// Union: value can be one of many types
let id: string | number;
id = "123";
id = 123;

// Intersection: combine multiple types
type A = { name: string };
type B = { age: number };
type C = A & B;

let user: C = { name: "Alice", age: 25 };


// =============================================
// Type Aliases and Interfaces
// =============================================

// Type alias
type Point = { x: number; y: number };

// Interface
interface User {
  id: number;
  name: string;
}

let point: Point = { x: 10, y: 20 };
let user1: User = { id: 1, name: "Bob" };


// =============================================
// BigInt and Symbol
// =============================================

// bigint: for very large integers
let big: bigint = 9007199254740991n;

// symbol: unique immutable values
let sym: symbol =  Symbol("id");


export { }