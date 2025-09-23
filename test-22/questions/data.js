export const libraryData = [
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