/* 1. Deep Nested Property Access
Given a deeply nested object, write a function to safely access a nested property using a string path.

*/
// Q: Write a function getValue(obj, "mart.departments.groceries.categories.fruits.apple.price")
//    that returns 2.5 (and undefined if path doesn't exist).
const data = {
  mart: {
    departments: {
      groceries: {
        categories: {
          fruits: { apple: { price: 2.5 } }
        }
      }
    }
  }
};

function getValue(obj, path) {
  const keys = path.split('.');
  let result = obj;
  console.log(keys);
  for (const key of keys) {
    if (result === null) undefined;
    result = result[key];
    console.log(result)
    
  }
}


getValue(data, "mart.departments.groceries.categories.fruits.apple.price")