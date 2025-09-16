// Use setTimeout to print numbers 1-5 at one-second intervals.

let arr = [1, 2, 3, 4, 5];

arr.forEach((v, i) => {
  setTimeout(() => {
    console.log(v);
  }, 1000 * (i + 1));
});

// alternative: 
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

