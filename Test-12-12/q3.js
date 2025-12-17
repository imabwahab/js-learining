
import { stateBankOfPakistan } from "./data.js";

// // 3. Retrieve all campaign names under the “Policy Team” where `reviewedByGov` is true and `reportPages` > 100.

function compaignNames() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Policy Team")
    .flatMap(({ employees }) => employees)
    .flatMap(({ campaigns }) => campaigns)
    .filter(({ metrics }) => metrics.reviewedByGov === true && metrics.reportPages > 100)
    .map(({ name }) => name).toString()

}

console.log(compaignNames())