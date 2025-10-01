// =============================================
// Type Casting in TypeScript
// =============================================

// 1. What is Casting?
// -------------------
// Casting tells TypeScript to treat a value as a different type.
// Useful when working with values from external sources (APIs, libraries, DOM).
// It does NOT change the runtime type — only how TS checks it.


// 2. Casting with "as"
// --------------------
let value: unknown = "Hello TypeScript";

let strLength: number = (value as string).length;
console.log(strLength); // 15


// 3. Casting with "<>"
// --------------------
// Equivalent to "as", but cannot be used in .tsx (React JSX) files.

let val: unknown = "Casting Example";
console.log((<string>val).toUpperCase());


// 4. Force Casting (Double Casting)
// ---------------------------------
// If TypeScript doesn’t allow a direct cast, you can cast through `unknown`.

let num = "123" as unknown as number;
console.log(num); // runtime is still string, TS treats as number

// ⚠️ Dangerous! Use only if you are certain of the type.


// 5. Real Use Cases
// -----------------

// (a) DOM elements (default type is HTMLElement)
const input = document.querySelector("input") as HTMLInputElement;
input.value = "Hello";

// (b) Working with JSON (default type is any/unknown)
const json = '{"name":"Alice","age":25}';
const user = JSON.parse(json) as { name: string; age: number };
console.log(user.name); // "Alice"

// (c) Narrowing after type checks
function formatId(id: string | number) {
  if (typeof id === "string") {
    return (id as string).toUpperCase();
  }
  return id.toFixed(2);
}
console.log(formatId("abc"));
console.log(formatId(123.456));


// 6. Type Casting vs Type Assertion
// ---------------------------------
// - "Type assertion" is the correct term in TS docs.
// - It tells the compiler "trust me, I know what I’m doing".
// - It does NOT convert the type at runtime (unlike JS type coercion).
