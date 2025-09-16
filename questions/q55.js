// create an object with getter an setter for a property

const student = {
  firstName: "Abdul",
  lastName: "Wahab",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    const parts = name.split(' ');
    this.firstName = parts[0],
      this.lastName = parts[1]
  }
}

console.log(student.fullName);

student.fullName = "Ali Khan";

console.log(student.fullName);