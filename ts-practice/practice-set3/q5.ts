// Create a function mergeObjects<T, U> (obj1: T, obj2 : U): T & U that merges two objects and keeps both types.

interface Rectangle {
  width: number,
  length: number
}

interface Square {
  length: number
}

let obj1: Rectangle = {
  width: 2,
  length: 5
}

let obj2: Square = {
  length: 4
}

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 }
}

console.log(mergeObjects<Rectangle, Square>(obj1, obj2))