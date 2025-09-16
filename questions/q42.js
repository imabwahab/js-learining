// MAP stores key-value pairs. Keys can be strings, numbers, objects, etc.
let map = new Map();

map.set('Pakistan', 'Islamabad');
map.set('Australia', 'Sydney');

console.log("Map example:");
console.log(map.get('Pakistan'));   // Islamabad
console.log(map.get('Australia')); // Sydney

// WEAKMAP stores key-value pairs where keys must be objects.
// If the key object becomes unreachable elsewhere, the entry is garbage collected.
let weakMap = new WeakMap();

let obj = {};
weakMap.set(obj, "data");

console.log("\nWeakMap example:");
console.log(weakMap.get(obj)); // data

// If 'obj' is no longer referenced anywhere, the entry will be removed from weakMap automatically


let person = { name: "Wahab" };

// Still referenced by 'person'
let weak = new WeakMap();
weak.set(person, "Some private data");

// Now remove the reference
person = null;

// At this point, the object { name: "Wahab" } is unreachable
// WeakMap will allow garbage collector to clean it up
