// Write a function that checks if two strings are anagrams.

function isAnagram(str1, str2) {
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  console.log(cleanStr1);
  console.log(cleanStr2);

  console.log(cleanStr1.split('').sort().join(''))
  console.log(cleanStr2.split('').sort().join(''))

  return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}


console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("a gentleman", "elegant man")); // true

