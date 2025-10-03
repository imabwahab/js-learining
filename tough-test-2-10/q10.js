/*
10. Transform Nested Data into Tree
You have flat data like this:

const items = [
  { id: 1, name: "Electronics", parentId: null },
  { id: 2, name: "Mobiles", parentId: 1 },
  { id: 3, name: "Laptops", parentId: 1 },
  { id: 4, name: "Gaming Laptops", parentId: 3 }
];
// Q: Convert into a tree structure with nested children.

*/

const items = [
  { id: 1, name: "Electronics", parentId: null },
  { id: 2, name: "Mobiles", parentId: 1 },
  { id: 3, name: "Laptops", parentId: 1 },
  { id: 4, name: "Gaming Laptops", parentId: 3 }
];

function buildTree(items) {
  const map = {};
  const roots = [];

  // Step 1: Intialize map and add children array to each item
  for (const item of items) {
    map[item.id] = { ...item, children: [] }
  }


  // Step 2 : Build tree by assigning children to parents
  for (const item of items) {
    if (item.parentId === null) {
      roots.push(map[item.id]); // Root node
    } else {
      const parent = map[item.parentId];
      if (parent) {
        parent.children.push(map[item.id]);
      }
    }
  }

  return roots;
}

const tree = buildTree(items);
console.log(JSON.stringify(tree, null, 2));