// Extend built-in Array class with a custom method first()

class myArray extends Array {
  first() {
    return this[0];
  }
}

const arr = new myArray(1, 3, 4, 5);

console.log(arr.first());