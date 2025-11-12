

/*
Deep Copy
Clone the softwareHouse object without keeping reference to the original one.
*/

import { softwareHouse } from "./data.js";

const deepCopy = JSON.parse(JSON.stringify(softwareHouse));
console.log(deepCopy);


/*
Deep Search
Write a function findByKeyValue(obj, key, value) that searches deeply nested objects and returns all matches.
*/

