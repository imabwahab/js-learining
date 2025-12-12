import { stateBankOfPakistan } from "./data.js";

// 10. Retrieve the names of all teams under the “Banking Supervision” department in the Main HQ Building.

function teamsUnderBankingSupervision() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .filter(({ name }) => name === "Banking Supervision")
    .flatMap(({ teams }) => teams)
    .map(({ name }) => name)
}

console.log(teamsUnderBankingSupervision())