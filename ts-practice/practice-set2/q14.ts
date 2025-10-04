// Define an abstract class Shape with a method area(). Then create Circle and Rectangle classes that implement it.

abstract class Shape {
  abstract area(): void
}

class Rectangle extends Shape {
  length: number
  width: number
  constructor(length: number, width: number) {
    super()
    this.length = length;
    this.width = width
  }

  area(): void {
    console.log(`area is ${this.length * this.width}`);
  }
}

class Circle extends Shape {
  radius: number
  constructor(radius: number) {
    super()
    this.radius = radius
  }
  area(): void {
    console.log(`area is ${3.14 * this.radius * this.radius}`)
  }
}