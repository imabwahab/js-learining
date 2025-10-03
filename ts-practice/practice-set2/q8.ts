// Define a function printId that accepts either a number or string and logs it.

function printId(val: number | string): void {
  console.log(`value is ${val}`)
}

printId(5);
printId('five');