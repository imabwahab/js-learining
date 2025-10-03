/**
 3. Deep Clone with Dates and Arrays
Why does JSON.parse(JSON.stringify(obj)) fail for objects with Date, Map, Set?
 Write a custom deep clone function that preserves Date objects and arrays.
 */

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    // Primitive types (number, string, boolean, null, undefined)
    return obj;
  }

  if (obj instanceof Date) {
    // Clone Date object
    return new Date(obj.getTime());
  }

  if (Array.isArray(obj)) {
    // Clone each element of the array
    return obj.map(item => deepClone(item));
  }

  // If it's a plain object, clone each key
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }

  return cloned;
}



const original = {
  name: "Ali",
  birthDate: new Date("1990-01-01"),
  hobbies: ["reading", "gaming"],
  nested: {
    joined: new Date("2020-05-05"),
    scores: [10, 20]
  }
};

const clone = deepClone(original);

console.log(clone);
// Check if the dates are real Date objects
console.log(clone.birthDate instanceof Date); // true
console.log(clone.nested.joined instanceof Date); // true
console.log(clone.hobbies === original.hobbies); // false (✅ cloned)
console.log(clone.birthDate === original.birthDate); // false (✅ cloned)
