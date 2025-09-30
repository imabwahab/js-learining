// what is currying in js.

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

console.log(add(2)(3)(5));

// Method 1 : currying
// function sendAutoEmail(to) {
//   return function (subject) {
//     return function (body) {
//       console.log(`Sending Email \n to : ${to} \n Subject : ${subject} \n body: ${body}`)
//     }
//   }
// }

// Method 2 : currying modern js
let sendAutoEmail = (to) => (subject) => (body) => console.log(`Sending Email \n to : ${to} \n Subject : ${subject} \n body: ${body}`)


let to = 'wahab@gmail.com';
let subject = 'New Order Confirmation';
let body = 'Hey wahab, Here is something for you.';

sendAutoEmail(to)(subject)(body);