"use strict";
// =============================================
// Type Aliases in TypeScript
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
var car = {
    year: 2021,
    type: "Toyota",
    model: "Corolla",
};
var userId1 = 101; // ✅ number
var userId2 = "A12"; // ✅ string
var user1 = { name: "Alice", age: 25 };
var user2 = { name: "Bob", age: 30, isAdmin: true };
var add = function (x, y) { return x + y; };
var status1 = "success"; // ✅
var staff1 = { name: "Alice", id: 101 };
var fruits = ["Apple", "Mango"];
var coordinate = [10, 20];
// Both valid:
var dog = { name: "Dog" };
var cat = { name: "Cat" };
