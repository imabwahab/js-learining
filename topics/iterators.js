// Iterators : Iterator is an object which defines a sequence and potentially a return vlaue upon its termination.

// for (const val of [1, 2, 3, 4, 5]) {
//   console.log(val)
// }


function iterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;
  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true }
    },
  };
  return rangeIterator;
}

const iter = iterator(1, 10, 2);

let result = iter.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value);