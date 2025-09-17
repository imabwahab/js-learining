// Search in array.

// 1 : indexOf() : method searches an array for an element value and returns its position/index.
const arr1 = [1, 2, 3, 4, 5, 6, 7];
let index = arr1.indexOf(6);
console.log(arr1, index);

// 2 : lastIndexOf() is the same as indexOf() but returns the position of the last occurence of the specified element.
console.log('lastIndexOf() method : ')
const arr2 = [1, 2, 1, 4, 5, 6, 7];
let lastIndex = arr2.lastIndexOf(1);
console.log(arr2, 'index is : ', lastIndex);

// 3 : includes() allow us to check if an element is present in an array.
console.log('includes() method : ');
const arr3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(arr3.includes("Banana"));


// 4 : find() method returns the value of the first array element that passes a test function.
console.log('find() method : ');
const arr4 = [4, 9, 16, 25, 29];
let first = arr4.find(myFunction)
function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);


// 5 : findIndex() method returns the index of the first array element taht passes a test function.
console.log('findIndex() method');
const arr5 = [4, 9, 16, 25, 29];
let firstIndex = arr5.findIndex(myFunction)
console.log(firstIndex);


// 6 : findLast() method that will start from end of an array and return the value of the first element.
console.log('findLast() method : ');
const arr6 = [27, 28, 30, 40, 42, 35, 30];
let high = arr6.findLast(x => x > 40);
console.log(high);

// 7 : findLastIndex() method finds the index of the last element taht satisfies a condition.
console.log('findLastIndex() method : ')
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log(pos);

