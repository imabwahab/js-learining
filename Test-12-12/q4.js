
import { stateBankOfPakistan } from "./data.js";


// // 4. Find all sources and years referenced in campaigns of the “Policy Team” where `reportPages` > 100.

function reportPages() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Policy Team")
    .flatMap(({ employees }) => employees)
    .flatMap(({ campaigns }) => campaigns)
    .filter(({ metrics }) => metrics.reportPages > 100)
    .flatMap(({ metrics }) => metrics.references)
}

console.log(reportPages())