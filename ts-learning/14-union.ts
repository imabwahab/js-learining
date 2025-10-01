// =============================================
// Union Types in TypeScript
// =============================================

// 1. What are Union Types?
// -------------------------
// A Union type describes a value that can be one of several types.
// Use the `|` (pipe) operator to combine multiple types.

let value: string | number;
value = "Hello"; // ✅ string
value = 42;      // ✅ number
// value = true; // ❌ Error: boolean not allowed


// 2. Union Types in Functions
// ----------------------------
// Example: A function parameter can accept either string or number.

function printStatusCode(code: string | number) {
  console.log(`Status code is: ${code}`);
}

printStatusCode(404);   // ✅ number
printStatusCode("404"); // ✅ string


// 3. Type Narrowing with Unions
// -----------------------------
// Before using type-specific methods, we must check the type at runtime.

function processId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // ✅ string method
  } else {
    console.log(id.toFixed(2));    // ✅ number method
  }
}

processId("abc123");
processId(123.456);


// 4. Union with Custom Types
// --------------------------

type UserResponse = "success" | "error" | "loading";

let response: UserResponse;
response = "success"; // ✅
response = "loading"; // ✅
// response = "failed"; // ❌ Error: not part of union


// 5. Union in Arrays
// ------------------
// Arrays can hold multiple types if defined with unions.

let data: (string | number)[] = ["Alice", 25, "Bob", 30];
console.log(data);


// 6. Union vs Any
// ---------------
// - `any` disables type checking completely.
// - `union` allows multiple types but still enforces strict checks.

let anything: any = 10;
anything = "hello"; // ✅ but unsafe

let strictUnion: string | number = "test";
// strictUnion = true; // ❌ only string or number allowed


export {};
