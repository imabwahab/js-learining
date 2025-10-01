"use strict";
// =============================================
// Interfaces in TypeScript
// =============================================
Object.defineProperty(exports, "__esModule", { value: true });
var rect = {
    height: 20,
    width: 10,
};
var car = { brand: "Toyota", model: "Corolla" };
car.model = "Yaris"; // ✅ allowed
var dog = { name: "Buddy", age: 5 };
var coloredRect = {
    height: 15,
    width: 25,
    color: "blue",
};
var person = {
    name: "Alice",
    greet: function () { return "Hello, my name is Alice"; },
};
var colors = {
    primary: "red",
    secondary: "green",
};
var add = function (x, y) { return x + y; };
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var circle = new Circle(10);
console.log(circle.area()); // 314.159...
