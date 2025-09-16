// Create a function that takes a string


console.log('to reverse a string we first convert the string into array using split() and then we reverse it and then again we will join them using join()')
function reverse(str){
  return str.split('').reverse().join('');
}

const str = reverse('Abdul Wahab');
console.log(str);

