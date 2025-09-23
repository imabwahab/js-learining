import { libraryData } from "./data.js";
 
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