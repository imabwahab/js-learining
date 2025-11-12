/*
Date Comparison
Find all projects whose revised deadline is after 2025-01-01.
List employees whose training dates are in 2025.
*/

import { softwareHouse } from "./test.js";


// Find all projects whose revised deadline is after 2025-01-01.
function revisedDeadline(softwareHouse) {
  let newDate = new Date('2025-01-01');
  softwareHouse.development.teams.map((team) =>
    team.members.map((member) => {
      member.projects.map((project) => {
        if (project.deadlines.revised > newDate) {
          console.log(project.name)
        }
      })
    })
  )
}


revisedDeadline(softwareHouse);

// List employees whose training dates are in 2025.

function trainingDates(softwareHouse) {
  let newDate = new Date('2024-12-31')
  softwareHouse.hr.employees.map((employee) => {
    employee.trainings.map((training) => {
      if (training.date > newDate) {
        console.log(employee.name)
      }
    })
  })
}

trainingDates(softwareHouse)

