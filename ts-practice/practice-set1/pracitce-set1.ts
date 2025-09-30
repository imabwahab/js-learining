// print the "Hello, Typescript" to the console.

import { add } from "./math";

console.log("Hello, Typescript!");


// Write a TypeScirpt function that takes your name as a parameter and prints a personalized welcome message.

function print(name: string): string {
  return `Hello, ${name}`;
}
console.log(print("Abdul Wahab"));


console.log(add(2, 3));