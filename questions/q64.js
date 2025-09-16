// Create a mixin that adds logging behavior to multiple classes.


// Technique to add reusable methods into classes.

let canLog = {
  log(message) {
    console.log(`[LOG]: ${message}`);
  }
};

class Animal { }
class Vehicle { }

Object.assign(Animal.prototype, canLog);
Object.assign(Vehicle.prototype, canLog);

const dog = new Animal();
const car = new Vehicle();

dog.log("The dog barked.");     // [LOG]: The dog barked.
car.log("Engine started.");     // [LOG]: Engine started.
