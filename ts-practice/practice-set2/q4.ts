// Define a type alias for an object representing a Book with title, author, and year.

// Type alias allow defining types with a custom name (an Alias).

type Book = {
  title : string,
  author : string,
  year : string | number
}

const book1 : Book = {
  title : "Ts Handbook",
  author : 'Anders',
  year : 2024
}

