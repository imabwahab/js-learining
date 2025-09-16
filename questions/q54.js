// Regular function: has its own 'this' (depends on how it's called)
function fun() {
  this.name = 'Abdul Wahab'; // 'this' refers to the global object (in non-strict mode)
  console.log(`${this.name}`); // prints "Abdul Wahab"
}
fun(); // In non-strict mode, 'this' refers to the global object (window in browsers)


// Arrow function: does NOT have its own 'this'
const arrow = (name) => {
  console.log(`${this.name}`); // 'this' is inherited from surrounding scope
}
arrow('Ali'); // Will likely print 'undefined' unless 'this.name' exists in the outer scope
