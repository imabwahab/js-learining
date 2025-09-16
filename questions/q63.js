// Demonstrate static properties and methods in a class.

// Static Datatypes belongs to the class itself not objects.

class MathUtil {
  static PI = 3.14;
  static add(a, b) { return a + b }
}

console.log(MathUtil.PI)
console.log(MathUtil.add(1, 3));