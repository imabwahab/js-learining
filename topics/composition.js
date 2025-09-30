// Function composition in JavaScript

// it is process of combining two or more functions so that the output of one function becomes the input of the next.

const add = (x) => x + 2;
const multiply = (x) => x * 3;

// compose manually
const result = multiply(add(5));
console.log(result);

// Generic compose function
const compose = (f, g) => (x) => f(g(x));
const add2 = (x) => x + 2;
const square = (x) => x * x;

const addThenSquare = compose(square, add2);
console.log(addThenSquare(3));


// Multiple functions composition
console.log('compose many...')
const composeMany = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const double = (x) => x * 2;
const increment = (x) => x + 1;
const triple = (x) => x * 3;
const composed = composeMany(triple, increment, double);

console.log(composed(2));
// double(2) = 4 -> increment(4) = 5 -> triple(5) = 15



