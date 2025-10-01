"use strict";
// =============================================
// Objects in TypeScript
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Typing Objects
// -----------------
// You can explicitly define the structure of an object
// by specifying property names and their types.
var car1 = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
};
// 2. Type Inference
// -----------------
// If you initialize an object immediately, TypeScript
// infers its type from the values.
var car2 = { type: "Toyota" };
car2.type = "Ford"; // ✅ Valid
// car2.type = 2;   // ❌ Error: must be a string
// 3. Optional Properties
// -----------------
// Use "?" to indicate that a property may or may not exist.
var car3 = {
    type: "Suzuki",
};
car3.mileage = 2000; // ✅ Optional property assigned later
// 4. Readonly Properties
// -----------------
// "readonly" makes a property immutable after initialization.
var car4 = {
    type: "Honda",
    year: 2015,
};
// car4.year = 2020; // ❌ Error: cannot assign to readonly property
// 5. Index Signatures
// -----------------
// Use index signatures when you don’t know all property names in advance.
var nameAgeMap = {};
nameAgeMap["Jack"] = 25;
nameAgeMap["Jill"] = 30;
var car5 = { type: "Tesla", model: "Model 3" };
var person1 = {
    name: "Alice",
    greet: function () { return "Hello, I'm Alice"; },
};
console.log(person1.greet()); // "Hello, I'm Alice"
