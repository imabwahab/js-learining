/*
9. Deep Comparison
Write a function deepEqual(obj1, obj2) that compares two nested objects/arrays, including Dates, and returns true if they are equal.

deepEqual({a:1, b:{c:2}}, {a:1, b:{c:2}}) // true
deepEqual({a:new Date("2025-01-01")}, {a:new Date("2025-01-01")}) // true
*/


function deepEqual(a, b) {
  // 1. Handle identical references or primitive equality
  if (a === b) return true;

  // 2. Handle Date comparison
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // 3. Handle arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // 4. Handle plain objects
  if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
  }

  // 5. All other cases (e.g., functions, mismatched types)
  return false;
}


// Primitives
console.log(deepEqual(5, 5)); // true
console.log(deepEqual('a', 'b')); // false


// Nested Objects
console.log(deepEqual({a:1, b:{c:2}}, {a:1, b:{c:2}})); // true
console.log(deepEqual({a:1, b:{c:2}}, {a:1, b:{c:3}})); // false


// Arrays : 
console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqual([1, [2, 3]], [1, [2, 3]])); // true
console.log(deepEqual([1, 2], [1, 2, 3])); // false



// Dates : 
console.log(deepEqual({a: new Date("2025-01-01")}, {a: new Date("2025-01-01")})); // true
console.log(deepEqual(new Date("2025-01-01"), new Date("2025-02-01"))); // false
