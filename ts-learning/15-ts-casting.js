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
var value = "Hello TypeScript";
var strLength = value.length;
console.log(strLength); // 15
// 3. Casting with "<>"
// --------------------
// Equivalent to "as", but cannot be used in .tsx (React JSX) files.
var val = "Casting Example";
console.log(val.toUpperCase());
// 4. Force Casting (Double Casting)
// ---------------------------------
// If TypeScript doesn’t allow a direct cast, you can cast through `unknown`.
var num = "123";
console.log(num); // runtime is still string, TS treats as number
// ⚠️ Dangerous! Use only if you are certain of the type.
// 5. Real Use Cases
// -----------------
// (a) DOM elements (default type is HTMLElement)
var input = document.querySelector("input");
input.value = "Hello";
// (b) Working with JSON (default type is any/unknown)
var json = '{"name":"Alice","age":25}';
var user = JSON.parse(json);
console.log(user.name); // "Alice"
// (c) Narrowing after type checks
function formatId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
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
