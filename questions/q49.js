// write a code using new Function to create a function at runtime.

const add = new Function('a', 'b', 'return a+b');

console.log(add(5, 3));

const greet = new Function('name', 'return "Hello, "+ name +"!"');

console.log(greet("Wahab"));