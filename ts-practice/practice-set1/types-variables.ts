// Declare variables with explicit type (string, number, boolean, null, undefined, any). Intialize them with values and log them.

let str: string = "Abdul Wahab";
console.log(`String type : ${str}`);

let num: number = 1234;
console.log(`Number type : ${num} `);

let bool: boolean = true;
console.log(`Boolean type : ${bool}`);

let nul: null = null;
console.log(`null type : ${nul}`);

let undefine: undefined;
console.log(`undefined type : ${undefine}`);

let an: any = "Abdul Wahab";
console.log(`any type : ${an}`);
an = 786;
console.log(`any type : ${an}`);

// Create a variable age:number and a variable isStudent:boolean. Print a sentence like:
let age: number = 20;
let isStudent: boolean = true;
console.log(`I am ${age} years old an I am a student : ${isStudent}`);

// Declare a const PI with value 3.1416. Try to reassign it (check compiler error).
const PI = 3.1416;
//PI = 3.14;

export { }