// Write a code taht uses try...catch with finally.


console.log('first try catch block.')
try {
  console.log('try block executed.')
} catch (error) {
  console.log(error.message)
} finally {
  console.log('finally block executed.')
}

console.log('second try catch block.')

try {
  console.log('try block executed.');
  throw new Error('Something went wrong!');
} catch (error) {
  console.log('Caught error:', error.message);
} finally {
  console.log('finally block executed.');
}
