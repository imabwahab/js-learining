/*
Create a function : 
function parseInput(value: string | number) { ... }
- if it's a string, return its length.
- if it's a number, return its square.
*/

function parseInput(value: string | number) {
  if (typeof value === 'string') {
    return value.length;
  }
  else {
    return value ** 2;
  }
}

console.log(parseInput('hello'))
console.log(parseInput(5))