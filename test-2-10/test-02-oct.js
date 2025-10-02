// 1. Access Object Property

const product = { id: 1, name: "Milk", price: 2.5 };
console.log(product.price);
// Q: Get the value of "price".


//2. Add New Property

const cart = { items: 3 };
// Q: Add a new property "totalPrice = 150".
cart.totalPrice = 150;
console.log(cart);



//3. Loop Through Object Keys & Values

const student1 = { name: "Ali", age: 20, grade: "A" };
// Q: Print all keys and values.
console.log(Object.keys(student1));
console.log(Object.values(student1));


//4. Convert Array to String

const fruits1 = ["Apple", "Banana", "Mango"];
// Q: Convert into string → "Apple, Banana, Mango".
console.log(fruits1.join(','));



// 5. Find in Array of Objects

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" }
];
// Q: Find the user with id = 2..

console.log(users.find(user => user.id === 2));



//6. Check if Property Exists

const car = { brand: "Toyota", model: "Corolla" };
// Q: Check if "model" exists.
console.log(car?.model);


//7. Get Array Length

const items = ["Milk", "Bread", "Eggs"];
// Q: Get the length of the array.
console.log(items.length)


// 8. Update Value in Object

const book = { title: "JS Basics", pages: 200 };
// Q: Update pages to 250.
book.pages = 250;
console.log(book);


// 9. Remove Property from Object

const order = { id: 101, status: "Pending" };
// Q: Remove "status" property.
delete order.status;
console.log(order)



// 10. Access Nested Object

const company = { name: "TechCo", address: { city: "Karachi", zip: 12345 } };
// Q: Get the value of "city".
console.log(company.address.city)



// 11. Get First and Last Element of Array

const numbers1 = [5, 10, 15, 20];
// Q: Get the first and last element.
console.log(numbers1.shift(), numbers1[numbers1.length - 1]);


//12. Reverse an Array

const letters = ["a", "b", "c", "d"];
// Q: Reverse the array.

console.log(letters.reverse())


// 13. Merge Two Arrays

const a = [1, 2], b = [3, 4];
// Q: Merge into [1,2,3,4].

console.log(a.concat(b))


//14. Convert String to Array

const text = "Apple, Banana, Mango";
// Q: Convert into array ["Apple","Banana","Mango"].

console.log(text.split(','))


//15. Simple Date Object

// Q: Create a Date object for "2025-01-01" and get the year.
const date1 = new Date();
console.log(date1.toLocaleDateString())


//16. Filter Array of Objects

const products = [
  { name: "Milk", price: 2 },
  { name: "Bread", price: 1 },
  { name: "Cheese", price: 5 }
];
// Q: Get all products with price > 2.
for (const product of products) {
  if (product.price > 2) {
    console.log(product);
  }
}


//17. Transform Array with map()

const orders = [
  { id: 1, total: 100 },
  { id: 2, total: 200 }
];
// Q: Convert into [100, 200].
let orderRes = orders.map(({ total }) => total);
console.log(orderRes)


//18. Sum with reduce()

const numbers = [10, 20, 30];
// Q: Find the sum (expected 60).
let res = 0
for (const num of numbers) {
  res += num;
}
console.log(res)

//19. Sort Array of Objects

const employees = [
  { name: "Ali", age: 30 },
  { name: "Sara", age: 25 },
  { name: "John", age: 35 }
];
// Q: Sort employees by age (ascending).  
let sortedEmployess = employees.sort((a, b) => a.age - b.age);
console.log(sortedEmployess)

//20. Find Max Value in Array

const sales = [
  { day: "Mon", amount: 100 },
  { day: "Tue", amount: 250 },
  { day: "Wed", amount: 150 }
];
//Q: Find the day with highest sales.
let highAmount = -99999999;
let highSale;
for (const sale of sales) {
  if (sale.amount > highAmount) {
    highAmount = sale.amount;
    highSale = sale;
  }
}

console.log(highSale)




//21. Count Occurrences in Array

const fruits = ["Apple", "Banana", "Apple", "Orange", "Banana"];
// Q: Count how many times each fruit appears.




//22. Remove Duplicates

const nums = [1, 2, 2, 3, 4, 4, 5];
// Q: Remove duplicates → [1,2,3,4,5].
let mapNums = new Set(nums);
console.log(mapNums);

//23. Merge Array of Objects by Key

const arr1 = [{ id: 1, name: "Ali" }];
const arr2 = [{ id: 1, age: 25 }];
// Q: Merge by "id" → [{id:1, name:"Ali", age:25}]



//24. Convert Object to Array

const student = { name: "Ali", age: 21 };
// Q: Convert to [["name","Ali"], ["age",21]].
console.log(Object.entries(student));


//25. Convert Array to Object

const arr = [["name", "Ali"], ["age", 21]];
// Q: Convert back to { name: "Ali", age: 21 }.
console.log(Object.fromEntries(arr))



//26. Nested Array Flattening

const nested = [1, [2, [3, 4]], 5];
// Q: Flatten into [1,2,3,4,5].
console.log(nested.flat(Infinity));


//27. Find Oldest Person

const people = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 35 },
  { name: "John", age: 28 }
];
// Q: Find the oldest person.
let oldestAge = 0;
for (const peo of people) {
  if (peo.age > oldestAge) {
    oldestAge = peo.age;
    console.log(peo);
  }
}



//28. Format Date

const d = new Date("2025-10-02");
// Q: Format into "02/10/2025" (DD/MM/YYYY).
console.log(d.toLocaleDateString())

//29. Average Value

const scores = [80, 90, 100, 70];
// Q: Find the average score.

let totalScore = 0;
let count = 0;
for (const score of scores) {
  totalScore += score;
  count++;
}
console.log(totalScore / count)

//30. Group By Property

const pets = [
  { type: "dog", name: "Rex" },
  { type: "cat", name: "Mittens" },
  { type: "dog", name: "Buddy" }
];
// Q: Group pets by type → { dog: ["Rex","Buddy"], cat: ["Mittens"] }


console.log(Object.fromEntries(pets));