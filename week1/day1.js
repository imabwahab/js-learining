// Task 1

const name = "Abdul Wahab";
const age = 20;
console.log("name : ", name, ", age : ", age);

// Task 2
const val = "42";
const num = 8;

console.log(Number(val) + num);

// Task 3
console.log('for loop');
for (let i = 1; i <= 10; i++) {
  console.log(`Num : ${i}`);
}

console.log('while loop');
let i = 1;
while (i <= 10) {
  console.log(`Num : ${i}`);
  i++;
}

// task 4 
console.log('even numbers');
let n = 1;
while (n <= 20) {
  if (n % 2 === 0) {
    console.log(n);
  }
  n++;
}

console.log('odd numbers');
let m = 1;
while (m <= 20) {
  if (m % 2 === 1) {
    console.log(m);
  }
  m++;
}