// Generators

function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

let g = numberGen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().done);

// async generator
async function* asyncGen() {
  yield await Promise.resolve("First");
  yield await Promise.resolve("Second");
  yield await Promise.resolve("Third");
}

// Wrap in an async function to use `for await...of`
(async () => {
  for await (let val of asyncGen()) {
    console.log(val);
  }
})();
