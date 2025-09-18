// 1 : indexOf() method returns index of first occurence of a string in a string, or it returns -1 if the string is not found.

let text1 = "Please locate where 'locate' occurs!";
let index = text1.indexOf("locate");
console.log(index);

// 2 : lastIndexOf() method returns the index of the last occurence of a specified text in a string.

let text2 = "Please locate where 'locate' occurs!";
let lastIndex = text1.lastIndexOf("locate");
console.log(lastIndex);

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
let lastIndex2 = text2.lastIndexOf("locate", 15);
console.log(lastIndex2);


// 3 :  search()  method searches a string for a string (or a regular expression) and returns the position of the match:
let text3 = "Please locate where 'locate' occurs!";
let pos = text3.search("locate");
console.log(pos)


// 4 : match() method returns an array containing the results of matching a string against a string (or a regular expression).
let text4 = "The rain in SPAIN stays mainly in the plain";
let arr = text4.match("ain");
console.log(arr);


// 5 : includes() method returns true if a string contains a specified value.
let text5 = "Hello world, welcome to the universe.";
let include = text5.includes("world");
console.log(include);


// 6 : startsWith() method returns true if a string begins with a specified value.
console.log('startsWith()')
let text6 = "Hello world, welcome to the universe.";
console.log(text6.startsWith("Hello"))
console.log(text6.startsWith("ghh"))

// 7 : endsWith() method returns true if a string ends with a specified value.
console.log('endsWith()')
let text7 = "John Doe";
console.log(text7.endsWith("doe"));
console.log(text7.endsWith("Doe"));