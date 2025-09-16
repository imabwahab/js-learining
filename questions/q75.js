// Write code to handle promise rejection properly

const failingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong!");
  }, 1000);
});

failingPromise
  .then(result => {
    console.log("Result: ", result)
  })
  .catch(error => {
    console.log("Caught an error:", error);
  });