// strings methods

let text = "I hope you are doing well. I am also fine.";

// method used to return the length of string is length
console.log(text.length)

// extracting string character at specific position. charAt(index)
console.log(text.charAt(9));

// extracting the code of character at a specific index in a string. charCodeAt()
console.log(text.charCodeAt(9));

// at method is also used to get the char at specific position. it allow the use of negative indexes but charAt() doesn't allow this.
let name = "w3Schools";
console.log(name.at(1));
let letter = name[2];
console.log(letter)

// joining two or more strings.
let text1 = "Hello,";
let text2 = "World!";
console.log(text1.concat( text2));

// slice() extracts a part of a string and returns the extracted part in a new string.
let fruits = "Apple, Banana, Kiwi.";
let part = fruits.slice(7, 13);
console.log(part)
// if a prameter is negative the position is counted from the end of string.
console.log(fruits.slice(-12));

// substring() is similar to slice(). the difference is start and end values less than 0 are treated as 0 in substring.
console.log(fruits.substring(7,13));

// to upper case
console.log(fruits.toUpperCase());

// to lower case
console.log(fruits.toLowerCase());

// trim() method removes whitespaces from both sides of a string.
let text3 = "      Hello World!          ";
console.log(text3)
console.log(text3.trim())

// trimStart() method works like trim(), but removes whitespaces only from the start of a string.
console.log(text3.trimStart());

// trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log(text3.trimEnd());

// the repeat() method returns a string with a number of copies of a string
let tx = "Apple, banana.";
let repeat = tx.repeat(4);
console.log('repeat', repeat);

// replace() method replaces a specified value with another value in string
let instrctions = "Please, visit, Microsoft!";
let newText = instrctions.replace("Microsoft", "Algotix AI");
console.log(instrctions);
console.log(newText);

// converting a string to an array. '' arrary of characters, ' ' array of words separated by spaces, ',' array of words separated by commas.
let arr = instrctions.split(',');
console.log(arr);


