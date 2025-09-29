"use strict";
// =============================================
// TypeScript Syntax Basics
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
// Type Annotations
var username = "Alice";
var age = 25;
var isActive = true;
// Arrays
var numbers = [1, 2, 3];
var names = ["Alice", "Bob"];
// Objects
var person = {
    name: "Alice",
    age: 25,
};
var user = { id: 1, name: "Bob" };
// Functions
function add(a, b) {
    return a + b;
}
// Generics (intro)
function identity(value) {
    return value;
}
var result = identity("Hello");
