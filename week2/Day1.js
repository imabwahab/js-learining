// Task create an object with properties (title, author, pages) and a method readBook()

const book = {
  title: 'Detective sherlock',
  author: 'Graham de ore',
  pages: 440,
  address: {
    street: '123 street1',
    city: 'Chishtain'
  },
  readbook: function () {
    console.log(`Book title is '${this.title}' and author of book is '${this.author}'. The book has '${this.pages}' pages.`)
  }
}

book.readbook();

// Task2 : use symbol to store a hidden property (like bookID).

let id = Symbol('id');
console.log(id);

const car = {
  company: 'Honda',
  model: 'Civic',
  manuYear: 2020,
  [id]: 123,

  print: function () {
    console.log(`Company is '${this.company}', model is '${this.model}' , manufactured year is '${this.manuYear}' and id is ${this[id]}`);
  }
}
car.print();

const clone = { ...book }

console.log(clone)
clone.author = "Charles";
console.log(book.author, clone.author);

const deepCopy = JSON.parse(JSON.stringify(book));
clone.address='1'
console.log(clone)
console.log(book);
console.log(deepCopy);


