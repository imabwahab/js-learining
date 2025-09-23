import { libraryData } from "./data.js";


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

console.log(oldPublications(libraryData))