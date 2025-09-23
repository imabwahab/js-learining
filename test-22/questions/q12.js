import { libraryData } from "./data.js";


/*
12. Student Borrowing Report
Create a report object for each student:

{
  studentName: "Alice Johnson",
  totalBooksBorrowed: 1,
  books: [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", daysLeft: 5 }
  ]
}
Calculate daysLeft until due date from a given date.

*/
function studentBorrowingReport(checkDateStr = "2023-09-10") {
  let checkDate = new Date(checkDateStr);
  let reports = [];

  libraryData.forEach((library) => {
    library.people
      .filter((person) => person.type === "student")
      .forEach((student) => {
        let books = student.borrowedBooks.map((book) => {
          let dueDate = new Date(book.dueDate);
          let diffDays = Math.ceil(
            (dueDate - checkDate) / (1000 * 60 * 60 * 24)
          );

          return {
            title: book.title,
            author: book.author?.name,
            daysLeft: diffDays,
          };
        });

        reports.push({
          studentName: student.name,
          totalBooksBorrowed: student.borrowedBooks.length,
          books: books,
        });
      });
  });

  return reports;
}

console.log(studentBorrowingReport("2023-09-10"));
