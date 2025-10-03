/*
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

*/

const categories = [
  {
    id: 1, name: "Electronics", children: [
      { id: 2, name: "Mobiles", children: [] },
      { id: 3, name: "Laptops", children: [{ id: 4, name: "Gaming Laptops", children: [] }] }
    ]
  }
];


function findCategory(categories, targetId) {
  for (const category of categories) {
    if (category.id === targetId) {
      return category;
    }

    if (category.children && category.children.length > 0) {
      const found = findCategory(category.children, targetId);
      if (found) {
        return found;
      }
    }
  }

  return null;   
}

console.log(findCategory(categories, 4))
