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

