import { libraryData } from "./data.js";


// 9. Students Who Borrowed a Specific Author
// List the names of all students who borrowed books by "George Orwell".


function studentsWhoBorrowedAuthor(libraryData, authorName) {
  let result = [];

  libraryData.forEach((library) => {
    library.people
      .filter((person) => person.type === "student")
      .forEach((student) => {
        student.borrowedBooks.forEach((book) => {
          if (book.author?.name === authorName) {
            result.push(student.name);
          }
        });
      });
  });

  return [...new Set(result)];
}

console.log(studentsWhoBorrowedAuthor(libraryData, "George Orwell"));

