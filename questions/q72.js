// Write a promise that resolves after 2 seconds with "Success".

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});