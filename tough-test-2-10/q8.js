/**
 8. Custom JSON Stringify with Circular References

const obj = {};
obj.self = obj;
// Q: JSON.stringify(obj) throws error (circular reference). 
// Write a custom stringify function that handles circular references gracefully.
 */

function customStringify(obj) {
  const seen = new WeakSet(); // Stores objects we've already seen

  return JSON.stringify(obj, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return "[Circular]";
      }
      seen.add(value);
    }
    return value; // Normal behavior
  }, 2); // Pretty print with 2-space indentation (optional)
}

const obj = {
  name : "Ali"
};

obj.self = obj;
console.log(customStringify(obj))