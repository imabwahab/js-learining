1. Access Object Property

const product = { id: 1, name: "Milk", price: 2.5 };
// Q: Get the value of "price".
2. Add New Property

const cart = { items: 3 };
// Q: Add a new property "totalPrice = 150".
3. Loop Through Object Keys & Values

const student = { name: "Ali", age: 20, grade: "A" };
// Q: Print all keys and values.
4. Convert Array to String

const fruits = ["Apple", "Banana", "Mango"];
// Q: Convert into string → "Apple, Banana, Mango".
5. Find in Array of Objects

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" }
];
// Q: Find the user with id = 2.
6. Check if Property Exists

const car = { brand: "Toyota", model: "Corolla" };
// Q: Check if "model" exists.
7. Get Array Length

const items = ["Milk", "Bread", "Eggs"];
// Q: Get the length of the array.
8. Update Value in Object

const book = { title: "JS Basics", pages: 200 };
// Q: Update pages to 250.
9. Remove Property from Object

const order = { id: 101, status: "Pending" };
// Q: Remove "status" property.
10. Access Nested Object

const company = { name: "TechCo", address: { city: "Karachi", zip: 12345 } };
// Q: Get the value of "city".
11. Get First and Last Element of Array

const numbers = [5, 10, 15, 20];
// Q: Get the first and last element.
12. Reverse an Array

const letters = ["a", "b", "c", "d"];
// Q: Reverse the array.
13. Merge Two Arrays

const a = [1, 2], b = [3, 4];
// Q: Merge into [1,2,3,4].
14. Convert String to Array

const text = "Apple, Banana, Mango";
// Q: Convert into array ["Apple","Banana","Mango"].
15. Simple Date Object

// Q: Create a Date object for "2025-01-01" and get the year.
16. Filter Array of Objects

const products = [
  { name: "Milk", price: 2 },
  { name: "Bread", price: 1 },
  { name: "Cheese", price: 5 }
];
// Q: Get all products with price > 2.
17. Transform Array with map()

const orders = [
  { id: 1, total: 100 },
  { id: 2, total: 200 }
];
// Q: Convert into [100, 200].
18. Sum with reduce()

const numbers = [10, 20, 30];
// Q: Find the sum (expected 60).
19. Sort Array of Objects

const employees = [
  { name: "Ali", age: 30 },
  { name: "Sara", age: 25 },
  { name: "John", age: 35 }
];
// Q: Sort employees by age (ascending).
20. Find Max Value in Array

const sales = [
  { day: "Mon", amount: 100 },
  { day: "Tue", amount: 250 },
  { day: "Wed", amount: 150 }
];
// Q: Find the day with highest sales.
21. Count Occurrences in Array

const fruits = ["Apple", "Banana", "Apple", "Orange", "Banana"];
// Q: Count how many times each fruit appears.
22. Remove Duplicates

const nums = [1, 2, 2, 3, 4, 4, 5];
// Q: Remove duplicates → [1,2,3,4,5].
23. Merge Array of Objects by Key

const arr1 = [{ id: 1, name: "Ali" }];
const arr2 = [{ id: 1, age: 25 }];
// Q: Merge by "id" → [{id:1, name:"Ali", age:25}]
24. Convert Object to Array

const student = { name: "Ali", age: 21 };
// Q: Convert to [["name","Ali"], ["age",21]].
25. Convert Array to Object

const arr = [["name","Ali"], ["age",21]];
// Q: Convert back to { name: "Ali", age: 21 }.
26. Nested Array Flattening

const nested = [1, [2, [3, 4]], 5];
// Q: Flatten into [1,2,3,4,5].
27. Find Oldest Person

const people = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 35 },
  { name: "John", age: 28 }
];
// Q: Find the oldest person.
28. Format Date

const d = new Date("2025-10-02");
// Q: Format into "02/10/2025" (DD/MM/YYYY).
29. Average Value

const scores = [80, 90, 100, 70];
// Q: Find the average score.
30. Group By Property

const pets = [
  { type: "dog", name: "Rex" },
  { type: "cat", name: "Mittens" },
  { type: "dog", name: "Buddy" }
];
// Q: Group pets by type → { dog: ["Rex","Buddy"], cat: ["Mittens"] }