// Create two promises : 1. One resolves in 2 seconds 2. One resolve in 2 seconds.

function promiseOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved in 2 seconds')
    }, 2000);
  });
}

function promiseTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved in 3 seconds')
    }, 3000);
  })
}

function resolveTwoPromises() {
  return Promise.all([promiseOne(), promiseTwo()]);
}

resolveTwoPromises().then((data) => console.log(data))