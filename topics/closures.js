// A closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an innner function..

// lexical scoping
function init() {
  var name = "Mozilla1";
  function displayName() {
    console.log(name);
  }
  displayName();
}

init();

// closure

function makeFunc() {
  const name = "Mozilla2";
  function displayName() {
    console.log(name)
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();


// Another example of adder using closures.
function makeAdder(x) {
  return function (y) {
    return x + y;
  }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
