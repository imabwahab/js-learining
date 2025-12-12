

import { stateBankOfPakistan } from "./data.js";

// 18. Get all comments from incomplete tasks of employees in the Audit Team, grouped by employee name.

function commentsFromAuditTeam() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Audit Team")
    .flatMap(({ employees }) => employees)
    .map(({ name, skills, tasks }) => {
      console.log(name, skills, tasks)
    })
}

console.log(commentsFromAuditTeam())