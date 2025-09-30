"use strict";
// Write a program to calculate the sum of digits of a number (e.g., 123 -> 1+2+3 = 6);
Object.defineProperty(exports, "__esModule", { value: true });
let num = 12345;
function sumOfDigits(num) {
    let sum = 0;
    let n = Math.abs(num);
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log(`Sum of digits of ${num} is ${sumOfDigits(num)}`);
//# sourceMappingURL=problem1.js.map