// Implement a function that demonstrates closures.

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log("Count:", count);
  }

  return inner;
}

const counter = outer();
counter(); // Count : 1
counter(); // Count : 2
counter(); // Count : 3