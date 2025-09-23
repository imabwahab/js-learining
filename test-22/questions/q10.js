import { libraryData } from "./data.js";

// 10. Students With Multiple Renewals
// Find students who have renewed any borrowed book more than once. Return student name and book titles.


function studentsWithMultipleRenewals(libraryData) {
  let result = [];

  libraryData.forEach((library) => {
    library.people
      .filter((person) => person.type === "student")
      .forEach((student) => {
        let renewedBooks = student.borrowedBooks.filter(
          (book) => book.renewals && book.renewals.length > 1
        );

        if (renewedBooks.length > 0) {
          result.push({
            student: student.name,
            books: renewedBooks.map((book) => book.title),
          });
        }
      });
  });

  return result;
}

console.log(studentsWithMultipleRenewals(libraryData));
