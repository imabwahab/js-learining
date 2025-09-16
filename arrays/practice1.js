// length : property returns the length
const fruits = ["Bananas", "Orange", "Apple", "Mango"];

let size = fruits.length;

console.log(size);

// length property can be used to set the length of an array
fruits.length = 4;
console.log(fruits);

//  toString() method returns the element of an array

let myList = fruits.toString();
console.log(myList);

// at() method used to get element at specific index
let fruit = fruits.at(2);

// Join method also joins all array elements into a string
let join = fruits.join(' ');
console.log(join);

// Pop() method removes the last element from an array
console.log(fruits.pop());


// push() method adds a new element to an array (at the end)
fruits.push('Kiwi');
console.log(fruits);

// shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(fruits.shift());

// unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift('grages');
console.log(fruits);

// concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log('concatenating two arrays \n', myChildren);

// concatinating three arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChild = arr1.concat(arr2, arr3);
console.log('concatenating three arrays \n', myChild);

// copyWithin() method copies array elements to another position in an array

let copy = fruits.copyWithin(2, 0);
console.log(copy);

// flat() method creates a new array with sub-array elements concatenated to a specified depth.

const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();

console.log('flat method \n', newArr);

// flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const arr = [1, 2, 3, 4, 5, 6];
const cpArr = arr.flatMap(x => [x, x * 10]);
console.log('flatMap method \n', cpArr);


// splice() method adds a new items to an array.
const vegs = ['carrot', 'onion', 'cabbage'];
console.log('before splicing vegs \n', vegs);

//first parameter defines the position where new elements should be added. and second parameter defines how many elements should be removed
vegs.splice(2, 0, "potato", 'cucumber');
console.log('after splicing vegs \n', vegs);

// we can use splice() to remove elements without leaving 'holes' in the array:
console.log(vegs.splice(0, 1));


// slice() method slices out a piece of an array into a new array:
// 1 means from index 1
const citrus = vegs.slice(1);
console.log(citrus);

// slice can take two arguments slice(start, end)
const cit = vegs.slice(1, 3);
console.log(cit)

