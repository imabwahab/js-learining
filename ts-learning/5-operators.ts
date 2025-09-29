// =============================================
// Operators in TypeScript
// =============================================

// Arithmetic
let sum = 5 + 3; // 8
let diff = 5 - 3; // 2
let prod = 5 * 3; // 15
let div = 10 / 2; // 5
let mod = 10 % 3; // 1
let pow = 2 ** 3; // 8

// Assignment
let x = 10;
x += 5; // 15
x -= 3; // 12

// Comparison
console.log(5 == "5");  // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 !== 3);   // true

// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// Bitwise
console.log(5 & 3); // 1 (0101 & 0011)

// Type operators
let str = "hello";
console.log(typeof str); // "string"

class Car {}
let car = new Car();
console.log(car instanceof Car); // true

let obj = { name: "Alice" };
console.log("name" in obj); // true


export {}