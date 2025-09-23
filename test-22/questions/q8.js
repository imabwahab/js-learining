import { libraryData } from "./data.js";

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
