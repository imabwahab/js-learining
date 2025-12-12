

import { stateBankOfPakistan } from "./data.js";
// 14. Find all campaigns for employees in the Policy Team whose skills include “Economic Analysis”.

function campaignsInPolicyTeam() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Policy Team")
    .flatMap(({ employees }) => employees)
    .filter(({ skills }) =>
      skills.includes("Economic Analysis")
    ).flatMap(({ campaigns }) => campaigns)
    .map(({ name }) => name)
}

console.log(campaignsInPolicyTeam())

