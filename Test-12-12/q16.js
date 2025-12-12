
import { stateBankOfPakistan } from "./data.js";

// 16. List all employee names in the “Printing & Minting” team including their skills.


function employeesInPrinting() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Printing & Minting")
    .flatMap(({ employees }) => employees)
    .map(({ name, skills }) => ({ name, skills: skills.toString() }))
}

console.log(employeesInPrinting())
