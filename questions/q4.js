// Create a function that takes two number and returns the large one using the ternary operator.

function fun (val1, val2){
  return ((val1>val2 ? val1 : val2));
}

let greaterVal = fun(8, 5);
console.log(greaterVal);