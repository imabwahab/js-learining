// Chain promises to perform three asychronous operations sequentially.

function firstOperation(params) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First operation done.");
      resolve("Step 1");
    }, 1000);
  })
}

function secondOperation(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second operation done, got", previousResult);
      resolve("Step 2");
    }, 1000)
  })
}

function thirdOperation(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Third operation done, got:", previousResult);
      resolve("Step 3");
    }, 1000);
  });
}

firstOperation()
  .then(result1 => secondOperation(result1))
  .then(result2 => thirdOperation(result2))
  .then(finalResult => {
    console.log("All operations completed. Final result : ", finalResult);
  });