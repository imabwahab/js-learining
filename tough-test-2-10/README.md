1. Deep Nested Property Access
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


2. Flatten Deeply Nested Object
Convert a deeply nested object into a flat object with dot-separated keys.

const data = {
  user: { 
    profile: { 
      name: "Ali", 
      contact: { email: "ali@email.com", phone: "1234" }
    } 
  }
};
// Q: Convert this into:
// { "user.profile.name": "Ali", "user.profile.contact.email": "...", "user.profile.contact.phone": "1234" }
3. Deep Clone with Dates and Arrays
Why does JSON.parse(JSON.stringify(obj)) fail for objects with Date, Map, Set?
 Write a custom deep clone function that preserves Date objects and arrays.
4. Grouping & Aggregation
You have an array of orders:

const orders = [
  { id: 1, customer: "Ali", total: 20, date: "2025-10-01" },
  { id: 2, customer: "Sara", total: 30, date: "2025-10-01" },
  { id: 3, customer: "Ali", total: 50, date: "2025-10-02" }
];
// Q: Group orders by customer and calculate total spent by each customer.
5. Recursive Search in Nested Arrays
You have a tree-like structure:

const categories = [
  {
    id: 1, name: "Electronics", children: [
      { id: 2, name: "Mobiles", children: [] },
      { id: 3, name: "Laptops", children: [{ id: 4, name: "Gaming Laptops", children: [] }] }
    ]
  }
];
// Q: Write a recursive function to find category by id (e.g., findCategory(categories, 4) → returns {id:4, name:"Gaming Laptops"})
6. Immutable Update on Nested Object
You have this object:

const state = {
  user: {
    profile: { name: "Ali", age: 25 },
    orders: [{ id: 1, total: 100 }]
  }
};
// Q: Update the age to 26 immutably without modifying the original object.
7. Time-Series Aggregation
Given sales data:

const sales = [
  { date: "2025-10-01", amount: 100 },
  { date: "2025-10-01", amount: 50 },
  { date: "2025-10-02", amount: 200 }
];
// Q: Aggregate total sales per date → { "2025-10-01": 150, "2025-10-02": 200 }
8. Custom JSON Stringify with Circular References

const obj = {};
obj.self = obj;
// Q: JSON.stringify(obj) throws error (circular reference). 
// Write a custom stringify function that handles circular references gracefully.
9. Deep Comparison
Write a function deepEqual(obj1, obj2) that compares two nested objects/arrays, including Dates, and returns true if they are equal.

deepEqual({a:1, b:{c:2}}, {a:1, b:{c:2}}) // true
deepEqual({a:new Date("2025-01-01")}, {a:new Date("2025-01-01")}) // true
10. Transform Nested Data into Tree
You have flat data like this:

const items = [
  { id: 1, name: "Electronics", parentId: null },
  { id: 2, name: "Mobiles", parentId: 1 },
  { id: 3, name: "Laptops", parentId: 1 },
  { id: 4, name: "Gaming Laptops", parentId: 3 }
];
// Q: Convert into a tree structure with nested children.