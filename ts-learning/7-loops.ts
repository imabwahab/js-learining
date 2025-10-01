// =============================================
// Loops in TypeScript
// =============================================

// for loop
for (let i = 0; i < 5; i++) {
  console.log("i:", i);
}

// while loop
let j = 0;
while (j < 5) {
  console.log("j:", j);
  j++;
}

// do...while loop
let k = 0;
do {
  console.log("k:", k);
  k++;
} while (k < 3);

// for...of (arrays)
let nums = [10, 20, 30];
for (let n of nums) {
  console.log(n);
}

// for...in (objects / keys)
let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key, person[key as keyof typeof person]);
}

export {}