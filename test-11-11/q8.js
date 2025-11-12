/*

Nested Loops & Conditionals
Get a list of all unique skills across all developers (Frontend + Backend).
Calculate the total progress average of all development projects.
Count how many projects are still ongoing (progress < 100).

*/

import { softwareHouse } from "./test.js";


function uniqueSkills(softwareHouse) {

  let skil = []
  softwareHouse.development.teams.map((team) => {
    team.members.map((mem) => {
      mem.skills.forEach((skill) => {
        console.log(skill)
        skil.push(skill);
      })
    })
  })
  console.log(skil)
}

uniqueSkills(softwareHouse);


// calculate the total progress average of all development projects.

function progressAverage() {
  let totalArr = [];
  softwareHouse.development.teams.map((team) => {
    team.members.map((mem) => {
      mem.projects.map((project) => {
        totalArr.push(project.progress)
      })
    })
  })
  const total = totalArr.reduce((a, b) => a + b, 0);
  console.log(total / totalArr.length)
}

progressAverage();


// Count how many projects are still ongoing (progress < 100).

function pendingProgress() {
  softwareHouse.development.teams.map((team) => {
    team.members.map((member) => {
      // console.log(member.projects)
      member.projects.map((project) => {
        if (project.progress < 100) {
          console.log(project.name)

        }
      })
    })
  })
}

pendingProgress()