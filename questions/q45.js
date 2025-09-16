// function to print fibonacci series

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(6));

console.log(fibonacci(10));