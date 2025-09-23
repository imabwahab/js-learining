import { libraryData } from "./data.js";

// 1. List All Borrowed Books
// Print the names of all students along with the titles of the books they have borrowed.


function printBorrowedBooks(libraryData) {
  let borrowedBook = [];
  libraryData.forEach((libData) => {
    
    libData.people.forEach((peopleData) => {

      if (peopleData.type === 'student') {
        console.log(peopleData);
        peopleData.borrowedBooks.forEach((book) => {
          borrowedBook.push(`Student : ${peopleData.name} , books : ${book.title} `);
        });
      }
    });
  });
  return borrowedBook;
}

console.log(printBorrowedBooks(libraryData));