// Use promise.all() with three promises that resolve at different times.

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("First resolved (1s)"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Second resolved (2s)."), 2000)
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Third resolved (3s)")
  }, 3000);
});


Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:");
    console.log(results);
  })
  .catch((error) => {
    console.log("One of the promises failed: ", error);
  });