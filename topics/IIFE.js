// IIFE (Immediately Invoked Function Expression) is a javascript function that runs as soon as it is defined.

// standard IIFE
(function () {
  console.log('function expression');
})();

// arrow function variant
(() => {
  console.log('arrow function variant.');
})();


// async IIFE
(async () => {
  console.log('async IIFE');
})();


const atm = function (intialBalance) {
  let balance = intialBalance;
  function withdraw(amt) {
    if (amt > balance) {
      return "Are you kidding?";
    }
    else {
      balance -= amt;
      return balance;
    }
  }
  return { withdraw }
}


const user = atm(1000);
console.log(user.withdraw(100));
console.log(user.withdraw(100));
console.log(user.withdraw(900));


// developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators