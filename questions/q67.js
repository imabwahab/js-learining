// Throw and catch a custom error InvalidAgeError.

class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 150) {
    throw new InvalidAgeError('Invalid age!');
  }
  console.log(`Valid age: ${age}`);
}

try {
  checkAge(-5);
} catch (error) {
  if (error instanceof InvalidAgeError) {
    console.log(`Custom Error Caught: ${error.message}`);
  }
  else {
    console.log(`Other Error: ${error.message}`);
  }
}