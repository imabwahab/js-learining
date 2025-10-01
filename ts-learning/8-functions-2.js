// =============================================
// Functions in TypeScript
// =============================================
// Explicit parameter and return type
function add(a, b) {
    return a + b;
}
// Inferred return type
function square(x) {
    return x * x; // inferred as number
}
// Arrow functions
var multiply = function (x, y) { return x * y; };
// Optional parameter
function greet(name, title) {
    return title ? "".concat(title, " ").concat(name) : "Hello, ".concat(name);
}
// Default parameter
function greetWithDefault(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello, ".concat(name);
}
// Rest parameters
function sumAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, n) { return acc + n; }, 0);
}
var subtract = function (a, b) { return a - b; };
