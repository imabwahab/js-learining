// Write a function taht simultes a fake API call using setTimeout inside a Promise. Resolve with "Data fetched" after 2 seconds.

function fakePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 2000)
  })
}

fakePromise().then(res => console.log(res))