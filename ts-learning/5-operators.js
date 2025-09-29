"use strict";
// =============================================
// Operators in TypeScript
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
// Arithmetic
var sum = 5 + 3; // 8
var diff = 5 - 3; // 2
var prod = 5 * 3; // 15
var div = 10 / 2; // 5
var mod = 10 % 3; // 1
var pow = Math.pow(2, 3); // 8
// Assignment
var x = 10;
x += 5; // 15
x -= 3; // 12
// Comparison
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 !== 3); // true
// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
// Bitwise
console.log(5 & 3); // 1 (0101 & 0011)
// Type operators
var str = "hello";
console.log(typeof str); // "string"
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
console.log(car instanceof Car); // true
var obj = { name: "Alice" };
console.log("name" in obj); // true
