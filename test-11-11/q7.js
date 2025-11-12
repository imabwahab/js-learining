/*

Conditional Access
Check if "Payroll Automation" project includes "HR" in departmentsInvolved.
Check whether any developer has completed all project tasks (all done: true).

*/

import { softwareHouse } from "./test.js";

function checkHR(softwareHouse) {
  softwareHouse.projects.map((project) => {
    //console.log(project)
    if (project.name === "Payroll Automation") {
      let ans = project.departmentsInvolved.some((dep) => dep === "HR");
      console.log(ans)
    }
  })
}

checkHR(softwareHouse)


function checkDeveloperTask(softwareHouse) {
  softwareHouse.development.teams.map((team) => {
    team.members.map((member) => {
      // console.log(member.projects)
      member.projects.map((project) => {
        let ans = project.tasks.every((task) => task === true);
        console.log(ans)
      })
    })
  })
}

checkDeveloperTask(softwareHouse)