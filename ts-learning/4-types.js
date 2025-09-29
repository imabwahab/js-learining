"use strict";
// =============================================
// TypeScript Types Guide
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
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
var greeting = "Hello, TypeScript";
// greeting = 42; // ❌ Error: Type 'number' is not assignable to 'string'
// Number
var userCount = 43;
// Boolean
var isLoading = true;
// Array of numbers
var scores = [100, 95, 98];
// Tuple (fixed-length, ordered array with specific types)
var tuple;
tuple = ["hello", 42]; // ✅
// tuple = [42, "hello"]; // ❌ Wrong order
// =============================================
// Type Inference
// =============================================
var username = "alice"; // inferred as string
var score = 100; // inferred as number
var flags = [true, false, true]; // inferred as boolean[]
// =============================================
// Special Types
// =============================================
// --- any ---
// Skips type checking entirely.
var v = true;
v = "string"; // ✅ no error
Math.round(v); // ✅ no error
// When to use any:
// - Migrating JavaScript code to TypeScript
// - Working with dynamic content where type is unknown
// - When you want to temporarily opt out of type checking
// --- unknown ---
// Type-safe counterpart of 'any'.
var w = 1;
w = "string"; // ✅ no error
// console.log(w.toUpperCase()); // ❌ Error
if (typeof w === "string") {
    console.log(w.toUpperCase()); // ✅ Safe
}
// --- void ---
// Used when a function does not return a value.
function logMessage(msg) {
    console.log(msg);
}
// --- never ---
// Represents values that never occur.
function fail(msg) {
    throw new Error(msg);
}
// Typical use cases: errors, infinite loops, exhaustive checks
// =============================================
// Null and Undefined
// =============================================
var n = null;
var u = undefined;
// =============================================
// Object
// =============================================
var person = { name: "Alice" };
// person.name // ❌ Error, use type/interface for better typing
// =============================================
// Enums
// =============================================
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
// =============================================
// Literal Types
// =============================================
var status;
status = "success"; // ✅
// status = "failed"; // ❌ not assignable
// =============================================
// Union and Intersection
// =============================================
// Union: value can be one of many types
var id;
id = "123";
id = 123;
var user = { name: "Alice", age: 25 };
var point = { x: 10, y: 20 };
var user1 = { id: 1, name: "Bob" };
// =============================================
// BigInt and Symbol
// =============================================
// bigint: for very large integers
var big = 9007199254740991n;
// symbol: unique immutable values
var sym = Symbol("id");
