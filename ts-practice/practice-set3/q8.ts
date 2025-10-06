/*
 Create a discriminated union type: 
type Shape = | {kind: "circle"; radius: number} 
  | {kind:"rectangle"; width: number; height: number}

  Then write a function getArea(shape: Shape) that returns the area.
*/

type Shape = | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };


function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  else {
    return shape.height * shape.width;
  }
}

let shape1: Shape = {
  kind: 'rectangle',
  height: 12,
  width: 16
}

let shape2: Shape = {
  kind: 'circle',
  radius: 6
}
console.log(getArea(shape1))
console.log(getArea(shape2))