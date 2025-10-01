// =============================================
// TypeScript Functions Guide
// =============================================

// ✅ Best practice: Always define parameter types.
// For return types, let TypeScript infer if obvious, otherwise annotate explicitly.


// ---------------------------------------------
// Basic Functions
// ---------------------------------------------

// Function with explicit parameter type
function addTwo(num: number): number {
  return 2 + num;
}
console.log(addTwo(5));


// Function with explicit parameter & return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

greet("Alice"); // ✅
// greet(42);   // ❌ Error: Argument of type '42' is not assignable to 'string'


// Function with inferred return type (inferred as number)
function add(a: number, b: number) {
  return a + b;
}
console.log(add(2, 3));


// Function that never returns
function throwError(message: string): never {
  throw new Error(message);
}


// Function that returns nothing (void)
function logMessage(msg: string): void {
  console.log(msg);
}


// ---------------------------------------------
// Arrow Functions
// ---------------------------------------------

// Explicit typing
const multiply = (x: number, y: number): number => {
  return x * y;
};

// Inferred return type
const square = (x: number) => x * x;


// ---------------------------------------------
// Optional & Default Parameters
// ---------------------------------------------

// Optional parameter: may be undefined
function printName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

printName("Alice");
printName("Alice", "Smith");

// Default parameter: uses default value if not provided
function greetWithDefault(name: string = "Guest"): string {
  return `Hello, ${name}`;
}
greetWithDefault();       // "Hello, Guest"
greetWithDefault("Wahab"); // "Hello, Wahab"


// ---------------------------------------------
// Rest Parameters
// ---------------------------------------------

// Use rest for variable number of arguments
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));


// ---------------------------------------------
// Function Types
// ---------------------------------------------

// Function type alias
type BinaryOperation = (a: number, b: number) => number;

const addNumbers: BinaryOperation = (a, b) => a + b;
const subtractNumbers: BinaryOperation = (a, b) => a - b;


// Function signature via interface
interface Greeter {
  (name: string): string;
}

const sayHi: Greeter = (name) => `Hi, ${name}`;


// ---------------------------------------------
// Early Perspectives / Best Practices
// ---------------------------------------------
/*
1. Always type parameters explicitly.
2. Type return values explicitly for:
   - Public APIs
   - Complex functions
   - Functions returning unions or generics
3. Prefer inference for simple functions.
4. Use 'void' for functions with no return.
5. Use 'never' for functions that should not return.
6. For reusability, define function types via aliases or interfaces.
7. For optional/default arguments, prefer '?' or '=' respectively.
*/

export { }
