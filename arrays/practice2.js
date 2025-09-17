// converting an array to string.

let arr1 = ['Banana', 'apple', 'grapes', 'mango'];
console.log(arr1);
let toStringArr1 = arr1.toString();
console.log(toStringArr1);


// Arrays are objects 
console.log(typeof arr1);

// Arrays elements can be objects
let arr2 = [];
arr2[0] = Date.now().toLocaleString();
console.log(arr2[0]);

// Accessing the first element & last element
const arr3 = ["Banana", "Orange", "Apple", "Mango"];
const firstElement = arr3[0];
const lastElement = arr3[arr3.length - 1];
console.log(firstElement, lastElement);

// Looping Array Elements

const arr4 = ["Banana", "Orange", "Apple", "Mango"];

// forloop : we use for loop we already know how many times our loop will run
console.log("For Loop : ");
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

// forEach loop : forEach only iterates over each element.
console.log('ForEach loop')
arr4.forEach((e) => {
  console.log(e);
});

// Adding array elements : easiest way to add a new element is using push() method
const arr5 = ["Banana", "Orange", "Apple", "Mango"];
arr5.push('guava');
console.log(arr5);

// In javascript, arrays use numbered indexes and objects use named indexes.
// we should use array when we want the elements names to be numbers and use objects when we want the element names to be strings.

// how to recognize an Array
// option1: Array.isArray()

console.log(Array.isArray(arr5));

// option2: instanceof
console.log(arr5 instanceof Array);


