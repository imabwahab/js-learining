import { stateBankOfPakistan } from "./data.js";

// 6. List the names of all employees in the “Distribution Team” under Currency Management, including their roles and skills.



function employessOfDistributionTeam() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap(({ teams }) => teams)
    .filter(({ name }) => name === "Distribution Team")
    .flatMap(({ employees }) => employees)
    .map(({ name, role, skills }) => ({ name, role, skills }))
}

console.log(employessOfDistributionTeam())