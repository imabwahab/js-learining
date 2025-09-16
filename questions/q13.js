// Demonstrate the nullish coalesing operator (??) with an example.

//'Nullish operator assigns the value which is on right side if the left side is null or undefind.'

//'Different from || operator which also considers 0 as null or empty'

const foo = null ?? "default number";

console.log(foo);

const soo = 0 ?? "default number";

console.log(soo);

const woo = 0 || "default number";
console.log(woo)