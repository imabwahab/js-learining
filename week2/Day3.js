// Make a string utility that capitalizes the first letter of a word.

let str = "Hello World.";

let strUtility = str.slice(0, 1);

console.log(strUtility);

// Create a Map that stores student -> grade, then loop over it.

const map = new Map();

map.set('Ahemd', 'A+');
map.set('Tauseef', 'B+');
map.set('Sara', 'A');

console.log('Grades:');
map.forEach((grades, student) => {
  console.log(`  ${student} - ${grades}  `)
})


// Use Date to calculate how many days are left in this year.

const today = new Date();
console.log(today);
const endOfYear = new Date(today.getFullYear(), 11, 31);
console.log(endOfYear);
const diffTime = endOfYear - today;
console.log(diffTime);
const daysLeft = Math.ceil(diffTime/(1000*60*60*24));
console.log(`Days left in this year are : ${daysLeft}`)