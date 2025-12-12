
import { stateBankOfPakistan } from "./data.js";

// 17. Find employees in the Policy Team who manage more than one campaign, along with campaign names.

function campaignsEmployeesInPolicyTeam() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Policy Team")
    .flatMap(({ employees }) => employees)
    .filter(({ campaigns }) => campaigns.length > 1)
    .map(({ name }) => name)

}

console.log(campaignsEmployeesInPolicyTeam())