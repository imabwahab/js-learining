// Error Handling (try...catch)
try {
  JSON.parse("{bad json}");
} catch (err) {
  console.log("Error:", err.message);
}


// Custom Errors(Extending error)

class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "ValidationError"
  }
}
//throw new ValidationError("Invalid input!");

// Callbacks
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => console.log("Step 2"), 1000)
}, 1000);

// Promises
let promise = new Promise(res => setTimeout(() => res("Done!"), 1000));
promise.then(console.log);

// Error Handling with Promises
Promise.reject("Error occured")
  .catch(err => console.log(err)); // Error occurred


// MicroTasks
Promise.resolve().then(() => console.log("Microtask"));
console.log("Sync");

Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(console.log)