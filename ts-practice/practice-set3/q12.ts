// Define a function throwIfEmpty(arr: any[]): never | void
// - if array is emty, throw an error; otherwise print"ok".

function throwIfEmpty(arr: any[]): never | void {
  if (arr.length === 0) {
    throw new Error('empty');
  }
  console.log('ok');
}

throwIfEmpty([]);
throwIfEmpty([1, 2, 3]);