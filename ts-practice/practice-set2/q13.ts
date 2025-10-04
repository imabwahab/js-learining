// Create a class Car with properties make, model and a method drive()

class Car {
  make: string
  model: string
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model
  }

  drive(): void {
    console.log('driving.')
  }
}