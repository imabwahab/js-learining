
import { stateBankOfPakistan } from "./data.js";

// // 2. List the names of all employees in the “Audit Team” who have received awards in their performance metrics.

function listOfAwards() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Audit Team")
    .flatMap(({ employees }) => employees)
    .map((emp) => {
      emp.performanceMetrics?.map((per) => {
        if (per.awards.length > 0) {
          console.log(emp.name)
        }
      })
    })

}

listOfAwards()