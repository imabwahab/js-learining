"use strict";
// =============================================
// TypeScript Introduction
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
// What is TypeScript?
// - TypeScript is a superset of JavaScript.
// - It adds static typing and other powerful features.
// - It compiles to plain JavaScript, so it can run anywhere JS runs.
// Why TypeScript?
// 1. Early error detection at compile time.
// 2. Better IDE support (autocompletion, intellisense).
// 3. Code readability and maintainability.
// 4. Supports modern JS features + additional tools like interfaces, generics.
// Example comparison:
// JavaScript (no type checking)
var jsVar = "hello";
console.log(jsVar);
// jsVar = 42; // ✅ No error in JS, but may cause runtime bugs
// TypeScript (type-safe)
var tsVar = "hello";
console.log(tsVar);
