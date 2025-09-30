// Generate the first 10 Fibonacci numbers.

function fibonacci(n: number): number[] {
  const fib: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}

const count = 10;
const fibonacciSeries = fibonacci(count);
console.log(`First ${count} Fibonacci numbers: `, fibonacciSeries);

