// =============================================
// Decision Making in TypeScript
// =============================================

// if...else
let num = 10;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// switch...case
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  default:
    console.log("Unknown fruit");
}

// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

export {}