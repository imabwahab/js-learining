
import { softwareHouse } from "./data.js";

// Find all tools (design + QA) used across all departments and return a unique list.

// Expected: ["Figma", "Adobe XD", "Illustrator", "Selenium", "Cypress", "Playwright"]


function tools() {
  let set = new Set();
  softwareHouse.location.offices.forEach((office) => {
    office.departments.forEach((dept) => {
      dept.teams?.forEach((team) => {

        team.tools?.forEach((tool) => {
          set.add(tool)
        })

        team.members?.forEach((mem) => {

          mem?.designTools?.forEach((tool) => {
            console.log(tool)
            set.add(tool)
          })
        })
      })
    })
  })

  //console.log(set)
  return [...set]
}

console.log(tools())