import { softwareHouse } from "./data.js";

// Get all employees (any department, any branch) who are working on project P101.

// Expected: ["Ali Khan", "Sara ahmed"]


function getAllEmployees(softwareHouse) {
  let employees = [];
  softwareHouse.location.offices.forEach((office) => {
    office.departments.forEach((dept) => {
      dept.teams?.forEach((team) => {
        team.members?.forEach((member) => {
          member.projects?.forEach((project) => {
            if (project.projectId === "P101") {
              // console.log(project)
              employees.push(member.name)
            }
          });

          member.assignedProjects?.forEach((assignedProject) => {
            //  console.log(assignedProject)
            if (assignedProject === "P102") {
              employees.push(member.name)
            }
          })
        })
      })
    })
  })

  return employees;
}



console.log(getAllEmployees(softwareHouse))


// data is not present.


