import { stateBankOfPakistan } from "./data.js";


// 9. List all tasks in the “Audit Team” that are incomplete and include their comments.

function incompleteInAuditTeam() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Audit Team")
    .flatMap(({ employees }) => employees)
    .flatMap((emp) => emp.tasks)
    .filter(({ completed }) => completed === false)
}

console.log(incompleteInAuditTeam())