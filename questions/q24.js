// create a constructor function Car with properties brand, model and a method start().

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.start = function start() {
    console.log('car is ready to go....');
  }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.brand);
console.log(myCar.model);
myCar.start();