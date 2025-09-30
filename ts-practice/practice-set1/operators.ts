// Write a program to find the sum, difference, product, and quotient of two numbers.

let num1 = 14;
let num2 = 10;

console.log(`Sum : ${num1 + num2}`);
console.log(`Sum : ${num1 - num2}`);
console.log(`Sum : ${num1 / num2}`);
console.log(`Sum : ${num1 % num2}`);

(num1 % 2 === 0) ? console.log('even') : console.log('odd');

let marks = 55;
let attendance = 60;
if (marks >= 50 && attendance >= 75) {
  console.log('pass');
} else {
  console.log('fail');
}