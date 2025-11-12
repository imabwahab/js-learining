

/*

Complex Query (Multiple Filters)
From all projects, get those:
where "Development" department is involved,
and where at least one milestone is incomplete,
and budget is greater than 500000.

*/

import { softwareHouse } from "./test.js";

function getDevelopment() {
  softwareHouse.projects.map((project) => {
    project.departmentsInvolved.map((department) => {
      if (department === "Development") {
        console.log(department)
      }
    })
  })
}

getDevelopment()