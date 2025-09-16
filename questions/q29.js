// Write a function that sums all numbers in an array.

function sum(arr) {
  let sum = 0;
  arr.forEach(val => {
    sum += val;
  });
  return sum;
}

let array = [1, 2, 3, 4, 5];
console.log(sum(array))