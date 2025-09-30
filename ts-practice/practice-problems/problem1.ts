// Write a program to calculate the sum of digits of a number (e.g., 123 -> 1+2+3 = 6);

let num = 12345;

function sumOfDigits(num: number): number {
  let sum = 0;
  let n = Math.abs(num);
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(`Sum of digits of ${num} is ${sumOfDigits(num)}`);