"use strict";
// =============================================
// Tuples in TypeScript
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
// 1. What are Tuples?
// --------------------
// A Tuple is a special type of array in TypeScript
// where the number of elements and their types are fixed.
// Order matters in Tuples.
// Example: A tuple with [number, boolean, string]
var tuple1;
tuple1 = [1, true, "Hello"]; // ✅ Correct
// tuple1 = ["Hello", 1, true]; // ❌ Wrong order
// 2. Common Operations
// --------------------
// Tuples are still arrays internally, so methods like push() work
// but may break type safety if not used carefully.
var tuple2 = [2, false, "TS"];
tuple2.push("Extra"); // Allowed but unsafe
console.log(tuple2); // [2, false, "TS", "Extra"]
// 3. Readonly Tuples
// --------------------
// Use 'readonly' to prevent accidental modifications.
var readonlyTuple = [3, true, "ReadOnly"];
// readonlyTuple.push("Oops"); // ❌ Error: Property 'push' does not exist
// 4. Named Tuples
// --------------------
// Provide labels for tuple elements for better readability.
var point = [10, 20];
console.log(point[0]); // 10
console.log(point[1]); // 20
// 5. Destructuring Tuples
// --------------------
// Easily extract tuple values into variables.
var graph = [30.5, 40.8];
var x = graph[0], y = graph[1];
console.log("X: ".concat(x, ", Y: ").concat(y));
// 6. Optional Elements in Tuples
// --------------------
// Tuples can have optional elements.
var optionalTuple;
optionalTuple = ["Hello"];
optionalTuple = ["Hello", 42];
// 7. Tuple with Rest Elements
// --------------------
// Rest elements allow variable-length tuples.
var restTuple;
restTuple = ["Start", 1, 2, 3, 4]; // ✅
