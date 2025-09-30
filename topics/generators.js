/*
While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerfull alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continous. Generator function are written using the function* syntax.

When called, generator functions do not intially execute their code. Instead, they return a special type of iterator, called a Generator. Wehen a value is consumed by calling the generator's next method, the Generator function executes until it 
*/

function* iterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = 0; i < end; i++) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}


/*
n object is iterable if it defines its iteration behavior, such as what values are looped over in a for...of construct. Some built-in types, such as Array or Map, have a default iteration behavior, while other types (such as Object) do not.

In order to be iterable, an object must implement the [Symbol.iterator]() method. This means that the object (or one of the objects up its prototype chain) must have a property with a Symbol.iterator key.

It may be possible to iterate over an iterable more than once, or only once. It is up to the programmer to know which is the case.

Iterables which can iterate only once (such as Generators) customarily return this from their [Symbol.iterator]() method, whereas iterables which can be iterated many times must return a new iterator on each invocation of [Symbol.iterator]().

*/

function* makeIterator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
  yield 8;
  yield 9;
  yield 10;
}

const iter = makeIterator();
for (const i of iter) {
  console.log(i)
}