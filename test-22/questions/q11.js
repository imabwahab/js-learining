import { libraryData } from "./data.js";

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
