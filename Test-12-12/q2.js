
import { stateBankOfPakistan } from "./data.js";

// // 2. List the names of all employees in the “Audit Team” who have received awards in their performance metrics.

function listOfAwards() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Audit Team")
    .flatMap(({ employees }) => employees)
    .filter((emp) => {
      if (emp.performanceMetrics?.some(({ awards }) => awards && awards.length > 0)) {
        return emp;
      }
    }).map(({ name }) => name)

}

console.log(listOfAwards())