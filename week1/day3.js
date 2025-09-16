// Task 1 : take a name and prints it

const printName = (value) => {
  console.log(`Name of user is ${value}`);
}

printName("Abdul Wahab");
printName('Ahmed');

// Task 2 : variable with age and print minor , adult etc.

const age = 11;

const printAgeStatus = (age) => {
  if (age >= 18) {
    console.log('Adult.')
  } else if (age < 18 && age > 0) {
    console.log('Minor.')
  }
  else {
    console.log('Not valid age.')
  }
}

printAgeStatus(age);

// Function to multiplies two numbers

let num1 = 2;
let num2 = 5;
const multiply = (num1, num2) => {
  console.log(`Multiplied value of ${num1} and ${num2} is ${num1 * num2}`);
}

multiply(num1, num2);

// Task 4 : check if number is between 10 and 50 using logical operators.

let test = 0;

if (test>=10 && test <= 50) {
  console.log('number is between 10 and 50.');
}
else{
  console.log('number is not between 10 and 50.')
}