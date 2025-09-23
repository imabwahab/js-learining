 const libraryData = [
  {
    libraryId: 1,
    name: "Central City Library",
    address: {
      street: "123 Knowledge Ave",
      city: "Metropolis",
      country: "USA",
      zipCode: "90001"
    },
    people: [
      {
        type: "staff",
        staffId: "ST001",
        name: "Emma Wilson",
        role: "Librarian",
        email: "emma.wilson@library.com",
        tasks: [
          { taskId: "T001", description: "Manage book returns" },
          { taskId: "T002", description: "Issue new library cards" }
        ]
      },
      {
        type: "staff",
        staffId: "ST002",
        name: "David Miller",
        role: "Assistant Librarian",
        email: "david.miller@library.com",
        tasks: [
          { taskId: "T003", description: "Help students find books" },
          { taskId: "T004", description: "Organize shelves" }
        ]
      },
      {
        type: "student",
        studentId: "S001",
        name: "Alice Johnson",
        borrowedBooks: [
          {
            bookId: "B001",
            title: "The Great Gatsby",
            category: "Fiction",
            author: {
              authorId: "A001",
              name: "F. Scott Fitzgerald",
              publications: [
                { title: "Tender is the Night", year: 1934 },
                { title: "This Side of Paradise", year: 1920 }
              ]
            },
            borrowDate: "2023-09-01",
            dueDate: "2023-09-15",
            renewals: [{ renewalId: "R001", date: "2023-09-10" }]
          }
        ]
      },
      {
        type: "student",
        studentId: "S002",
        name: "Robert Smith",
        borrowedBooks: [
          {
            bookId: "B003",
            title: "1984",
            category: "Fiction",
            author: {
              authorId: "A002",
              name: "George Orwell",
              publications: [
                { title: "Animal Farm", year: 1945 },
                { title: "Homage to Catalonia", year: 1938 }
              ]
            },
            borrowDate: "2023-08-20",
            dueDate: "2023-09-03",
            renewals: []
          }
        ]
      }
    ],
    categories: [
      {
        categoryId: "C001",
        name: "Fiction",
        authors: [
          {
            authorId: "A001",
            name: "F. Scott Fitzgerald",
            publications: [
              { title: "The Great Gatsby", year: 1925 },
              { title: "Tender is the Night", year: 1934 },
              { title: "This Side of Paradise", year: 1920 }
            ]
          },
          {
            authorId: "A002",
            name: "George Orwell",
            publications: [
              { title: "1984", year: 1949 },
              { title: "Animal Farm", year: 1945 },
              { title: "Homage to Catalonia", year: 1938 }
            ]
          }
        ]
      },
      {
        categoryId: "C002",
        name: "Science & Technology",
        authors: [
          {
            authorId: "A003",
            name: "Thomas H. Cormen",
            publications: [
              { title: "Introduction to Algorithms", year: 2022 },
              { title: "Algorithms Unlocked", year: 2013 }
            ]
          },
          {
            authorId: "A004",
            name: "Stephen Hawking",
            publications: [
              { title: "A Brief History of Time", year: 1988 },
              { title: "The Universe in a Nutshell", year: 2001 }
            ]
          }
        ]
      }
    ],
    functions: [
      "Issue Books",
      "Return Books",
      "Add New Books",
      "Update Book Records",
      "Manage Members",
      "Organize Events",
      "Maintain Library Resources"
    ]
  }
];


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



// 2. Authors with Old Publications
// Find all authors in the Fiction category who have published any book before 1930. Return their names and book titles.


function oldPublications(libraryData) {
  let result = [];
  libraryData.forEach((libData) => {
    libData.categories.forEach((cat) => {
      if (cat.name === "Fiction") {
        cat.authors.forEach((authors) => {
          authors.publications.forEach(pub => {
            if (pub.year < 1930) {
              let name = authors.name;
              let title = pub.title;
              result.push({ name, title })
            }
          })
        })
      }
    })
  })

  return result;
}

console.log(oldPublications(libraryData));


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


 
// 4. Flatten All Book Titles
// Create a flat array of all book titles in the library from all categories and authors.


function allBookPublished(libraryData) {
  let allBooks = [];
  libraryData.forEach((libData) => {
    libData.categories.forEach((categories) => {
      categories.authors.forEach((author) => {
        let { name } = author;
        author.publications.forEach((publication) => {
          let { title } = publication;
          allBooks.push({ name, title });
        });
      });
    });
  });
  return allBooks;
}


console.log(allBookPublished(libraryData));






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


import { libraryData } from "./data.js";

// 7. Total Publications per Author
// For each author in the library, calculate total number of publications. Return an array of objects:

// [{ author: "F. Scott Fitzgerald", totalPublications: 3 }, ...]


function totalPublicationsPerAuthor(libraryData) {
  let result = [];

  libraryData.forEach((library) => {
    library.categories.forEach((category) => {
      category.authors.forEach((author) => {
        result.push({
          author: author.name,
          totalPublications: author.publications.length,
        });
      });
    });
  });

  return result;
}

console.log(totalPublicationsPerAuthor(libraryData));


// 8. First Publication of Authors
// Print the first publication title of each author using optional chaining.


function firstPublicationOfAuthors(libraryData) {
  libraryData.forEach((library) => {
    library.categories.forEach((category) => {
      category.authors.forEach((author) => {
        // use optional chaining to safely access the first publication
        const firstPub = author.publications?.[0]?.title;
        console.log(`${author.name}: ${firstPub ?? "No publications"}`);
      });
    });
  });
}

firstPublicationOfAuthors(libraryData);



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



// 11. Sort Authors by Publications
// Sort all authors in Science & Technology category by number of publications in descending order. Return author name and count.

function sortScienceTechAuthorsByPublications(libraryData) {
  let result = [];

  libraryData.forEach((library) => {
    library.categories
      .filter((category) => category.name === "Science & Technology")
      .forEach((category) => {
        category.authors.forEach((author) => {
          result.push({
            author: author.name,
            totalPublications: author.publications.length,
          });
        });
      });
  });

  // Sort in descending order
  return result.sort((a, b) => b.totalPublications - a.totalPublications);
}

console.log(sortScienceTechAuthorsByPublications(libraryData));


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
