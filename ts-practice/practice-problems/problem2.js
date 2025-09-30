"use strict";
// Generate the first 10 Fibonacci numbers.
Object.defineProperty(exports, "__esModule", { value: true });
function fibonacci(n) {
    const fib = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(0);
        }
        else if (i === 1) {
            fib.push(1);
        }
        else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }
    return fib;
}
const count = 10;
const fibonacciSeries = fibonacci(count);
console.log(`First ${count} Fibonacci numbers: `, fibonacciSeries);
//# sourceMappingURL=problem2.js.map