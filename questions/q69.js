// Create a function that retires an operation three times if it fails.

function retryOperation(operation, maxRetries = 3) {
  let attempts = 0;
  while (attempts < maxRetries) {
    try {
      return operation();
    } catch (error) {
      attempts++;
      console.warn(`Attempt ${attempts} failed : ${error.message}`);

      if (attempts === maxRetries) {
        console.log("All retries failed.");
        throw error;
      }
    }
  }
}

let count = 0;
function unstableOperation() {
  count++;
  if (count < 3) {
    throw new Error("Random Failure");
  }
  return "Success on attempt" + count;
}

try {
  const result = retryOperation(unstableOperation);
  console.log("Result:", result);

} catch (error) {
  console.log("Operation ultimately failed:", error.message);
}