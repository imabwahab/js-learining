import { libraryData } from "./data.js";

// 3. Total Borrowed Books
// Count the total number of borrowed books across all students in the library.

function countBorrowedBooks(libraryData) {
  let count = 0;
  libraryData.forEach(libData => {
    libData.people.forEach(people => {
      if (people.type === 'student') {
        count += people.borrowedBooks.length
      }
    });
  });

  return count;
}

console.log(countBorrowedBooks(libraryData));