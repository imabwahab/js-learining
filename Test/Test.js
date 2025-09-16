// Mcq 1 : undefined
// Mcq 2 : 22
// Mcq 3 : === 
// Mcq 4 : To prevent undeclared variables
// Mcq 5 : JSON.parse()

// Sction B : 
// Question 1:
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(5));

// Question 2 : the null is value not assigned.
// undefined : the value is not defined.


// 

// Question 3 :
const multiply = (a, b) => {
  return a * b;
}

console.log(multiply);

// Question 4

let obj1 = { name: "Ali" };
let obj2 = obj1;
obj2.name = "Sara";
console.log(obj1.name);

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}


// Section C : 

// Question 1 : 
let x = 5;
if (x = 0) {
  console.log("x is 10");
}

// in this question the value is reassigning to the variable which is also true except the value 0


// Question 2 : 
function sayHi(name){
  console.log("Hi", name);
}

// in this question the function taking the parameter name but in console it is consolling Name which is not declared.