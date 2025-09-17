// Basic Array Methods

// 1 : Array length : returns us the length of an array and we can store in in var

let arr1 = ["Banana", "Orange", "Apple", "Mango"];
let arr1Length = arr1.length;
console.log(arr1, arr1Length);

// 2 : toString method : it converts the array to a single string

let arr2 = ["Banana", "Orange", "Apple", "Mango"];
let arr2String = arr2.toString();
console.log(arr2, arr2String);

// 3 : at() : it returns the elements at the specific index.

let arr3 = ["Banana", "Orange", "Apple", "Mango"];
let arr3At = arr3.at(2);
console.log(arr3, arr3At);

// 4 : join() : it joins all array elements into string.
let arr4 = ["Banana", "Orange", "Apple", "Mango"];
let arr4String = arr4.join("*");
console.log(arr4, arr4String);

// 5 : pop() : it removes the last element
let arr5 = ["potato", "tomato", "onion"];
arr5.pop();
console.log(arr5);

// 6 : push() : method adds a new elements to an array (at the end)
const arr6 = ["Banana", "Orange", "Apple", "Mango"];
arr6.push("Kiwi");
console.log(arr6);

// 7 : shift() : method removes the first array elements and shifts all other elements to a lower index. returns the value that was shifted out.
const arr7 = ["Banana", "Orange", "Apple", "Mango"];
const shiftValue = arr7.shift();
console.log(arr7, shiftValue);

// 8 : unshift() : method adds a new element to an array (at the beginning), and "unshifts" older elements.
const arr8 = ["Banana", "Orange", "Apple", "Mango"];
arr8.unshift("Lemon");
console.log(arr8);

// 9 : delete : deletes the element and leaves undefined holes in the array.
const arr9 = ["Banana", "Orange", "Apple", "Mango"];
delete arr9[2];
console.log(arr9);

// 10 : concat() : method creates a new array by merging existing arrays;
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myGirls);
console.log(myBoys);
console.log(myChildren);

// 11 : concat() : method can take any number of array arguments.
const myChilds = myGirls.concat(myBoys, myGirls);
console.log(myChilds);

// 12 : copyWithin() : method copies array elements to another position in an array.
console.log('copyWithin() method:')
const arr12 = ["Banana", "Orange", "Apple", "Mango"];
arr12.copyWithin(2, 0);
console.log(arr12);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
console.log(fruits);

// 13 : flat() : method creates a new array with sub-array elements concatenated to a specified depth.
const arr13 = [[1, 2], [3, 4], [5, 6, [7, 8]]];
console.log('flat() method:');
console.log(arr13)
const newArr13 = arr13.flat();
console.log(newArr13);

// 14 : flatMap() : method first maps all elements of an array and then creates a new array by flattening the array.
console.log('flatMap() method:')
const arr14 = [1, 2, 3, 4, 5, 6];
console.log(arr14)
const newArr14 = arr14.flatMap(x => [x, x * 10]);
console.log(newArr14);

// 15 : splice() method adds new items to an array.
//  splice(2, 0 , element1, element2) :
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
console.log('splice() method:')
const arr15 = ["Banana", "Orange", "Apple", "Mango"];
arr15.splice(2, 0, "Lemon", "Kiwi");
console.log(arr15);
console.log()

// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

arr15.splice(2, 1);
console.log(arr15);

// 16 : toSpliced() method as a safe way to splice an array without altering the original array.
console.log('spliced() method:');
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months);
const spliced = months.toSpliced(0, 1);
console.log(spliced);


// 17 : slice() method slices out a piece of an array into a new array:
console.log('slice() method:');
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// slice(n) n represents starting from n index.
const citrus = fruits1.slice(1);
console.log(fruits1);
console.log(citrus);
// The slice() method can take two arguments like slice(start, end). the end will not include.



