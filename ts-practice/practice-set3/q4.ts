// Write a generic function getLastElement<T>(arr: T[]) : T that returns the last element of an array.

type arr<T> = {
  numbers: T[]
}

function getLastElement<T>(arr: T[]) {

  return arr[arr.length - 1];
}

let arrString = ['A', 'B', 'C', 'D', 'I', 'j'];

console.log(getLastElement<string>(arrString));

let numString = [1, 2, 3, 4, 5, 6];
console.log(getLastElement<number>(numString));