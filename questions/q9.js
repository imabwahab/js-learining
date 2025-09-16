// Write a program to calculate the factorial of a number using recursion.

function recursion(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * recursion(num - 1);
}

console.log(recursion(5));


