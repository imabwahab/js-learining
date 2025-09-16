// Write a function that counts how many times each word appears in a string.

function countWords(str) {
  const words = str.toLowerCase().split(/\s+/); // split by spaces, handle multiple spaces
  const wordCount = {};

  words.forEach(word => {
    // Remove punctuation (optional)
    word = word.replace(/[.,!?]/g, '');

    if (word in wordCount) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  return wordCount;
}

const res = countWords('Hello, How are you');

console.log(res);