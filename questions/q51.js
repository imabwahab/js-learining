// -----------------------------
// var: Function-scoped, NOT block-scoped
// -----------------------------
{
  var x = 10;  // Declared inside a block
  console.log("Inside block (var):", x); // 10
}
console.log("Outside block (var):", x);  // ✅ Still accessible — because var is NOT block-scoped


// -----------------------------
// const: Block-scoped, must be initialized at declaration
// -----------------------------
{
  const v = 13;               // Must be assigned a value immediately
  console.log("Inside block (const):", v); // 13
}
// console.log("Outside block (const):", v); // ❌ Error: v is not defined (because it's block-scoped)


// -----------------------------
// let: Block-scoped, can be declared without assignment
// -----------------------------
{
  let z;         // Declared but not initialized
  z = 20;        // Assigned later
  console.log("Inside block (let):", z); // 20
}
// console.log("Outside block (let):", z); // ❌ Error: z is not defined (also block-scoped)
