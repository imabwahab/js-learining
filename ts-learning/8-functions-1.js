"use strict";
// =============================================
// TypeScript Functions Guide
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
// ✅ Best practice: Always define parameter types.
// For return types, let TypeScript infer if obvious, otherwise annotate explicitly.
// ---------------------------------------------
// Basic Functions
// ---------------------------------------------
// Function with explicit parameter type
function addTwo(num) {
    return 2 + num;
}
console.log(addTwo(5));
// Function with explicit parameter & return type
function greet(name) {
    return "Hello, ".concat(name, "!");
}
greet("Alice"); // ✅
// greet(42);   // ❌ Error: Argument of type '42' is not assignable to 'string'
// Function with inferred return type (inferred as number)
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
// Function that never returns
function throwError(message) {
    throw new Error(message);
}
// Function that returns nothing (void)
function logMessage(msg) {
    console.log(msg);
}
// ---------------------------------------------
// Arrow Functions
// ---------------------------------------------
// Explicit typing
var multiply = function (x, y) {
    return x * y;
};
// Inferred return type
var square = function (x) { return x * x; };
// ---------------------------------------------
// Optional & Default Parameters
// ---------------------------------------------
// Optional parameter: may be undefined
function printName(firstName, lastName) {
    return lastName ? "".concat(firstName, " ").concat(lastName) : firstName;
}
printName("Alice");
printName("Alice", "Smith");
// Default parameter: uses default value if not provided
function greetWithDefault(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello, ".concat(name);
}
greetWithDefault(); // "Hello, Guest"
greetWithDefault("Wahab"); // "Hello, Wahab"
// ---------------------------------------------
// Rest Parameters
// ---------------------------------------------
// Use rest for variable number of arguments
function sumAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, n) { return acc + n; }, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));
var addNumbers = function (a, b) { return a + b; };
var subtractNumbers = function (a, b) { return a - b; };
var sayHi = function (name) { return "Hi, ".concat(name); };
