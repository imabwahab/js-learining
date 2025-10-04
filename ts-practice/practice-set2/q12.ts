// What's the difference between interface and type? Show an example of each.

// type allow us to define types with a custom name.


type yearStuding = number | string;
type name = string;
type age = number;
type enrolled = boolean;

type studentData = {
  name: name;
  age: age;
  enrolled: enrolled;
  year: yearStuding
}

let st1: studentData = {
  name: 'wahab',
  age: 20,
  enrolled: true,
  year: 2020

}


// Interfaces are similar to type aliases , except they only apply to object types.

interface Rectangle {
  height : number,
  width : number
}

let rectangle : Rectangle = {
  height : 200,
  width : 100
}