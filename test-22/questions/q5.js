import { libraryData } from "./data.js";


// 5. Upcoming Due Books
// FaList all borrowed books that are due within the next 7 days from a given date. Include student name, book title, and due date.
function upcomingDueBooks(libraryData, checkDate) {
  checkDate = new Date(checkDate);

  libraryData.forEach((library) => {
    library.people
      .filter((person) => person.type === "student")
      .forEach((student) => {
        student.borrowedBooks.forEach((book) => {
          let dueDate = new Date(book.dueDate);

          // Calculate difference in days
          let diffTime = dueDate - checkDate;
          let diffDays = diffTime / (1000 * 60 * 60 * 24);

          // Check if due within next 7 days and not overdue
          if (diffDays >= 0 && diffDays <= 7) {
            console.log(
              `Student: ${student.name}, Book: ${book.title}, Due Date: ${book.dueDate}`
            );
          }
        });
      });
  });
}

upcomingDueBooks(libraryData, "2023-09-13");
