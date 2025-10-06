// Write a function findMax<T entends number | string>(arr: T[]): T , that returns the maximum value in an array.

function findMax<T extends number | string>(arr: T[]) {
  let maxNum = arr[0];
  for (const num of arr) {
    if (num > maxNum) {
      maxNum = num;
    }
  }

  return maxNum;
}

console.log(findMax([4, 5, 31, 6, 8]))
console.log(findMax(['dog', 'elephant', 'zebra']))