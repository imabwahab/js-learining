// What are native prototypes? Extend Array with a method last()

class myArray extends Array {
  last = () => {
    return this[this.length - 1];
  }
}

const newArr = new myArray(1,2,3);
console.log(newArr.last())