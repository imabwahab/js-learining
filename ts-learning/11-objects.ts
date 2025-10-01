// =============================================
// Objects in TypeScript
// =============================================

// 1. Typing Objects
// -----------------
// You can explicitly define the structure of an object
// by specifying property names and their types.

const car1: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};


// 2. Type Inference
// -----------------
// If you initialize an object immediately, TypeScript
// infers its type from the values.

const car2 = { type: "Toyota" };
car2.type = "Ford"; // ✅ Valid
// car2.type = 2;   // ❌ Error: must be a string


// 3. Optional Properties
// -----------------
// Use "?" to indicate that a property may or may not exist.

const car3: { type: string; mileage?: number } = {
  type: "Suzuki",
};
car3.mileage = 2000; // ✅ Optional property assigned later


// 4. Readonly Properties
// -----------------
// "readonly" makes a property immutable after initialization.

const car4: { type: string; readonly year: number } = {
  type: "Honda",
  year: 2015,
};
// car4.year = 2020; // ❌ Error: cannot assign to readonly property


// 5. Index Signatures
// -----------------
// Use index signatures when you don’t know all property names in advance.

const nameAgeMap: { [key: string]: number } = {};
nameAgeMap["Jack"] = 25;
nameAgeMap["Jill"] = 30;
// nameAgeMap["Mark"] = "Fifty"; // ❌ Error: must be number


// 6. Using Type Aliases for Objects
// -----------------
// Instead of repeating object structures, use type aliases.

type Car = {
  type: string;
  model?: string;
  year?: number;
};

const car5: Car = { type: "Tesla", model: "Model 3" };


// 7. Objects with Methods
// -----------------
// Objects can also include functions.

type Person = {
  name: string;
  greet: () => string;
};

const person1: Person = {
  name: "Alice",
  greet: () => `Hello, I'm Alice`,
};

console.log(person1.greet()); // "Hello, I'm Alice"


export {};
