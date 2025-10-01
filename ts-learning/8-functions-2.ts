// =============================================
// Functions in TypeScript
// =============================================

// Explicit parameter and return type
function add(a: number, b: number): number {
  return a + b;
}

// Inferred return type
function square(x: number) {
  return x * x; // inferred as number
}

// Arrow functions
const multiply = (x: number, y: number): number => x * y;

// Optional parameter
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : `Hello, ${name}`;
}

// Default parameter
function greetWithDefault(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

// Rest parameters
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

// Function type alias
type BinaryOperation = (a: number, b: number) => number;
const subtract: BinaryOperation = (a, b) => a - b;
