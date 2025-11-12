
/*

Array Filtering
Get all projects where the progress < 80.
Find all developers who know "React".
Filter HR employees who have taken more than 3 leaves in October.
*/

import { softwareHouse } from "./test.js";

function projectsProgress(softwareHouse) {
  let projects = [];
  softwareHouse.development.teams.map((team) =>
    team.members.map((member) => (
      member.projects.map((project) => {
        if (project.progress < 80) {
          projects.push(project.name)
        }
      })
    ))
  );

  console.log(projects)
}

projectsProgress(softwareHouse)


// Find all developers who know "React".

function reactDevs(softwareHouse) {
  const teamLead = softwareHouse.development.teamLead.name;
  let teamDev = [];
  softwareHouse.development.teams.map((team) => {
    team.members.map((member) => teamDev.push(member.name));
  })


  console.log(teamLead, teamDev)
}

reactDevs(softwareHouse);


// Filter HR employees who have taken more than 3 leaves in October.

function hrEmployeesWithLeaves() {
  let hrs = []
  softwareHouse.hr.employees.map((emp) => {
    emp.leaves.filter((leave) => {
      if (leave.count > 3) {
        hrs.push(emp.name)
      }
    });
  });

  console.log(hrs)
}

hrEmployeesWithLeaves();