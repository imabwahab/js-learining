"use strict";
// =============================================
// Classes in TypeScript
// =============================================
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Introduction
// ---------------
// - A class is a blueprint for creating objects.
// - TypeScript adds strong typing + visibility modifiers (public, private, protected).
// - Members (properties & methods) must follow declared types.
// 2. Basic Class Example
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var person = new Person("Hamza");
person.name = "Jane";
console.log(person.name); // "Jane"
// 3. Visibility Modifiers
// -----------------------
// - public (default): Accessible everywhere
// - private: Accessible only within the class
// - protected: Accessible in class + subclasses
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2("Alice");
console.log(person2.getName()); // "Alice"
// person2.name ❌ Error: private
// 4. Parameter Properties
// -----------------------
// Shortcut: define & assign properties directly in constructor.
var Person3 = /** @class */ (function () {
    function Person3(name, age) {
        this.name = name;
        this.age = age;
    }
    Person3.prototype.getName = function () {
        return this.name;
    };
    return Person3;
}());
var person3 = new Person3("Bob", 22);
console.log(person3.getName()); // "Bob"
console.log(person3.age); // 22
// 5. readonly Properties
// ----------------------
// Cannot be reassigned after initialization.
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var car = new Car("Toyota");
// car.brand = "Honda"; ❌ Error: Cannot assign to readonly
// 6. Inheritance
// --------------
// Classes can extend other classes.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.move(); // "Moving..."
dog.bark(); // "Woof!"
// 7. Method Override
// ------------------
// A subclass can override methods from the parent class.
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.greet = function () {
        console.log("Hello from Parent");
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.greet = function () {
        console.log("Hello from Child");
    };
    return Child;
}(Parent));
new Child().greet(); // "Hello from Child"
// 8. Abstract Classes
// -------------------
// - Cannot be instantiated directly.
// - Can define abstract methods (must be implemented by subclasses).
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var circle = new Circle(10);
console.log(circle.getArea()); // 314.159...
var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
    }
    Book.prototype.print = function () {
        console.log("Book: ".concat(this.title));
    };
    return Book;
}());
new Book("TS Handbook").print(); // "Book: TS Handbook"
