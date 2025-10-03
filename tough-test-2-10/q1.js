/* 1. Deep Nested Property Access
Given a deeply nested object, write a function to safely access a nested property using a string path.

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
// Q: Write a function getValue(obj, "mart.departments.groceries.categories.fruits.apple.price")
//    that returns 2.5 (and undefined if path doesn't exist).

*/
function getValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

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

console.log(getValue(data, "mart.departments.groceries.categories.fruits.apple.price")); // 2.5
console.log(getValue(data, "mart.unknown.key")); // undefined
