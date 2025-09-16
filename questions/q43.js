// SET: Stores unique values of any type (primitives or objects)
let set = new Set([1, 2, 2, 3, 4, 5, 5, 8, 9, 9, 9]);

console.log("Set:");
console.log(set); // Output: Set(7) {1, 2, 3, 4, 5, 8, 9}

// WEAKSET: Stores only objects, and they must be unique
let weakSet = new WeakSet();

let user = { name: 'Abdul Wahab' };

weakSet.add(user);

console.log("\nWeakSet:");
console.log(weakSet.has(user)); // Output: true
