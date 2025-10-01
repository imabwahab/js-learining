// =============================================
// Arrays in TypeScript
// =============================================

// Using []
let numbers: number[] = [1, 2, 3];

// Array of strings
let vegs: string[] = ["potato", "onion", "carrot"];
vegs.push("tomato");
console.log(vegs);

// The readonly keyword can prevent arrays from being changed.
const names: readonly string[] = ["Abdul wahab", "Kamran"];
// names.push("Ahtisham"); // Error: Property 'push' does not exist on type 'readonly string []', to make it functional we have to remove the keyword readonly.

// Using Array<T>
let fruits: Array<string> = ["Apple", "Banana"];

// Mixed arrays (union)
let mixed: (number | string)[] = [1, "two", 3];

// Array methods
numbers.push(4);
console.log(numbers.map(n => n * 2));


export {}

