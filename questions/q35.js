// Write a function that returns the longest word in a sentence.

 let sentence = "I hope you are doing well !";

// function longestWord(sentence) {
//   let arr = sentence.split(' ');
//   let longest = "";

//   arr.forEach((word) => {
//     if (word.length >= longest.length) {
//       longest = word;
//     }
//   });

//   return longest;
// }

// console.log(longestWord(sentence));
// ➜ "doing"


// same problem using the iterables.

function longestWord (sentence){
  let arr = sentence.split(' ');
  let longest = '';
  for(let word of arr){
    if (word.length >= longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWord(sentence))

