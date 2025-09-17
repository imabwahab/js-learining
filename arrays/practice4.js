// Array Sort

// 1 : sort() : method sorts an array alphabetically.
console.log('sort() method');
const arr1 = ["Banana", "Orange", "Apple", "Mango"];
console.log('Before sorting : ', arr1);
arr1.sort();
console.log('After sorting : ', arr1);

// 2 : reverse() : method reverse an array.
console.log('reverse() method');
const arr2 = ["Banana", "Orange", "Apple", "Mango"];
console.log('Before reversing', arr2);
arr2.reverse();
console.log('After reversing', arr2);

// by combining sort() and reverse(), you can sort an array in descending order:

console.log('combining sort() and reverse() : ')
const arr3 = ["Banana", "Orange", "Apple", "Mango"];
console.log('Before sorting and reversing :', arr3);
arr3.sort().reverse();
console.log('After sorting and reversing : ', arr3);

// 3 : toSorted() method a safe way to sort an array without altering the original array.
console.log('toSorted() method:');
const arr4 = ["Jan", "Feb", "Mar", "Apr"];

const toSorted = arr4.toSorted();
console.log(toSorted, arr4);


// 4 : toSorted() method a safe way to sort an array without altering the original array.
console.log('toReversed() method:');
const arr5 = ["Jan", "Feb", "Mar", "Apr"];

const toReversed = arr5.toReversed();
console.log(toReversed, );