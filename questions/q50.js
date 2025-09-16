// Implement function decorators that log function executing time.


// In Javascript , a decorator is typically a higher-order function --- a function that takes another function as input and returns a new fucntion with enhanced behavior.

function logExecutionTime(fn) {
  return function (...args) {
    const start = performance.now(); // Start time
    const result = fn(...args); // call the original function
    const end = performance.now(); // end time

    console.log(`Execution time: ${(end - start).toFixed(2)}ms`);

    return result;
  };
}

function slowFunction(n) {
  // Simulate a slow task (e.g., loop)
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// Wrap it using the decorator
const timedSlowFunction = logExecutionTime(slowFunction);

// Call it
console.log("Result:", timedSlowFunction(1_000_000));
