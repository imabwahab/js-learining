

/*

Nested Data Aggregation
Count how many tasks (total) are marked as done: false in all projects.
Find the total number of mentees under the team lead.
*/

import { softwareHouse } from "./test.js";

function totalTasks(softwareHouse) {
  let total = 0;
  console.log(total)
  softwareHouse.development.teams.map((team) =>
    team.members.map((member) => {
      member.projects.map((project) => {
        project.tasks.map((task) => {
          // console.log(task)
          if (task.done == false) {
            console.log(task)
            total++;
          }
        })
      })
    })
  )
  console.log(total)
}

totalTasks(softwareHouse);

function totalMentee(softwareHouse) {
  const totalMentees = softwareHouse.development.teamLead.mentoring.length;
  console.log(totalMentees)
}
totalMentee(softwareHouse)