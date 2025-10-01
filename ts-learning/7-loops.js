"use strict";
// =============================================
// Loops in TypeScript
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
// for loop
for (var i = 0; i < 5; i++) {
    console.log("i:", i);
}
// while loop
var j = 0;
while (j < 5) {
    console.log("j:", j);
    j++;
}
// do...while loop
var k = 0;
do {
    console.log("k:", k);
    k++;
} while (k < 3);
// for...of (arrays)
var nums = [10, 20, 30];
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var n = nums_1[_i];
    console.log(n);
}
// for...in (objects / keys)
var person = { name: "Alice", age: 25 };
for (var key in person) {
    console.log(key, person[key]);
}
