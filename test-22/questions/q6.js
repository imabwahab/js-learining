import { libraryData } from "./data.js";

// 6. Borrowed Books Grouped by Category
// Return an object grouping borrowed books by category. Example:

// {
//   "Fiction": ["The Great Gatsby", "1984"],
//   "Science & Technology": ["Introduction to Algorithms"]
// }


function borrowedBooksByCategory(libraryData) {
  let result = {};

  libraryData.forEach((library) => {
    library.people
      .filter((person) => person.type === "student")
      .forEach((student) => {
        student.borrowedBooks.forEach((book) => {
          // If category doesn't exist, create it
          if (!result[book.category]) {
            result[book.category] = [];
          }
          // Push the book title into that category
          result[book.category].push(book.title);
        });
      });
  });

  return result;
}

console.log(borrowedBooksByCategory(libraryData));
