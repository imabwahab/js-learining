// 3. Using filter(), find all projects from projectsPortfolio whose status is "Active" or "Completed".

import { softwareCompany } from "./data.js";


function filteredProjectsPortfolio() {
  // console.log(softwareCompany.projectsPortfolio)
  const result = softwareCompany.projectsPortfolio.filter((project) => {
    if (project.status === "Active" || project.status === "Completed") {
      return project;
    }
  })

  console.log(result)
}

filteredProjectsPortfolio()