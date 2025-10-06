// Write a function wrapValue<T>(value: T) that returns an object : {value : T, timestamp: number}

function wrapValue<T>(value: T) {
  let number = Math.floor(Math.random() * 100000)
  return {
    value: value,
    timsestamp: number
  }
}

interface Rectangle {
  length: number,
  width: number
}

let rec1: Rectangle = {
  length: 4,
  width: 6
}

console.log(wrapValue<Rectangle>(rec1))