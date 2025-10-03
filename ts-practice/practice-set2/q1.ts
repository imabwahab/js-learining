

// What is difference between any, unknown and never in TypeScript? Give Examples.

// Type : any,  The any type is the most flexible type in TypeScript.
// It essentially tells the compiler to skip type checking for a particular variable.


let u: any = true;
console.log(u);
u = 1;
console.log(u);



// Type : unknown  , is a type-safe counterpart of any.
// It's the type safe way to say "This could be anything , so you must perform some type of checking before you use it."

let w : unknown = 1;
w = "string";


// type : never , represents the type of values that never occur.
// It's used to indicate that something never happens or should never happen.

function throwError(message: string)  : never {
  throw new Error(message);
}