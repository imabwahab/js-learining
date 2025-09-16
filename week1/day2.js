// Task 1: check if a number is positive, negative, or zero.

let num = -10;

if (num >= 1) {
  console.log(`Number ${num} is positive.`)
} else if (num <= -1) {
  console.log(`Number ${num} is negative.`)
} else {
  console.log(`Number is zero.`);
}

// Task 2 : switch statement to print the name of day for number 1-7.

let val = 6;
switch (val) {
  case 1:
    console.log('Monday.')
    break;
  case 2:
    console.log('Tuesday.')
    break;
  case 3:
    console.log('Wednesday.')
    break;
  case 4:
    console.log('Thursday.')
    break;
  case 5:
    console.log('Friday.')
    break;
  case 6:
    console.log('Saturday.')
    break;
  case 7:
    console.log('Sunday.')
  default:
    console.log('Not a day.')
    break;
}

// Task 3 : Calculate the power of a number.

let pow = 5;
let n = 2;

console.log(`Value of number ${n} and power ${pow} and eval value ${n ** pow}`);

// Task 4 : code with and without "use strict"

"use strict";

v = 2;

console.log(v);

// compare == and ===
console.log(`comparison using the == operators : ${"42"==42}`);

console.log(`comparison using the === operators : ${"42"===42}`);



