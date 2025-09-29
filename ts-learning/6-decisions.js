"use strict";
// =============================================
// Decision Making in TypeScript
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
// if...else
var num = 10;
if (num > 0) {
    console.log("Positive");
}
else if (num < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
// switch...case
var fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
        break;
    case "banana":
        console.log("Banana selected");
        break;
    default:
        console.log("Unknown fruit");
}
// Ternary Operator
var age = 18;
var canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote: ".concat(canVote));
