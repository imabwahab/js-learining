// Write a function identity<T> that returns whatever value you pass in, with proper generics.


function identity<T>(value: T): T {
  return value;
}

console.log(identity(5));
console.log(identity('Ts'));
