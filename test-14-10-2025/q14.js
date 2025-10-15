/*
Q14. Write a Promise chain that:

Resolves a list of all projects from projectsPortfolio.

Filters only those with status "Active".

Logs their names in uppercase format.
(Demonstrate .then() chaining properly.)
*/


import { softwareCompany } from "./data.js";


function getProjectPortfolio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = softwareCompany.projectsPortfolio.filter((project) => {
        if (project.status === "Active") {
          return project;
        }
      })

      resolve(result);
    }, 2000)
  })
}


getProjectPortfolio().then((message) => console.log(message))