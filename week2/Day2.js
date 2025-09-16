// Task 1:  Write a function that safely gets the email of a user using ?. .

const user = {
  name : 'Abdul Wahab',
  email: 'imabwahab@gmail.com',
  subject: 'computer science'
}

const getEmail = ()=>{
  return user?.email;
}

console.log(getEmail());

// Task 2: convert an object {a:1, b:2} into an array of entries and back.

const object = {a:1, b: 2};

const entries = Object.entries(object);

console.log(entries);

const newObject =  Object.fromEntries(entries);

console.log(newObject)

// Task 3: reducing to find the sum

const nums = [5, 10, 15];

let sum = nums.reduce((a, b) => a+b, 0);

console.log(sum);

// Task 4: function that uses destructuring to get a title and author from a book object.

const book = {
  title: "secrect's of sherlock holmes",
  author: 'Alex da jous'
}

const {title, author} = book;

console.log(title, author);