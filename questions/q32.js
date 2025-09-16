const student = {
  name: "Abdul Wahab",
  age:20
}

const str = JSON.stringify(student);
console.log(str);

const obj = JSON.parse(str);
console.log(obj);
