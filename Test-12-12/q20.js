
import { stateBankOfPakistan } from "./data.js"
// 20. List all branches and their department team names along with employee names in a nested structure.


function branchesData(stateBankOfPakistan) {
  return stateBankOfPakistan.branches.flatMap(({ city, address, departments }) => {
    return departments.map(({ teams }) => ({
      branch: `${city} - ${address}`,
      teamName: teams.map(({ name }) => name).toString(),
      teamMembers: teams.map(({ employees }) => employees
        .map(({ name }) => name)).toString()
    }))
  })
}

console.log(branchesData(stateBankOfPakistan))