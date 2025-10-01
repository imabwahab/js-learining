"use strict";
// =============================================
// Arrays in TypeScript
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
// Using []
var numbers = [1, 2, 3];
// Array of strings
var vegs = ["potato", "onion", "carrot"];
vegs.push("tomato");
console.log(vegs);
// The readonly keyword can prevent arrays from being changed.
var names = ["Abdul wahab", "Kamran"];
// names.push("Ahtisham"); // Error: Property 'push' does not exist on type 'readonly string []', to make it functional we have to remove the keyword readonly.
// Using Array<T>
var fruits = ["Apple", "Banana"];
// Mixed arrays (union)
var mixed = [1, "two", 3];
// Array methods
numbers.push(4);
console.log(numbers.map(function (n) { return n * 2; }));
