
import { stateBankOfPakistan } from "./data.js";

// 11. Get all awards and remarks of “Ali Raza” from his performance metrics.

function remarksByAliRaza() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap(({ teams }) => teams)
    .flatMap(({ employees }) => employees)
    .filter(({ name }) => name === "Ali Raza")
    .flatMap(({ performanceMetrics }) => performanceMetrics)
    .flatMap(({ awards, remarks }) => ({ awards: awards.toString(), remarks: remarks.toString() }))
}

console.log(remarksByAliRaza())