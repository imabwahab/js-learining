import { softwareCompany } from "./data.js";


// Q7. Write a function getProjectDetailsByEmployee(employeeId) that finds an employee by their ID and returns an array of all their project names and their statuses.
// (Use find(), map(), and optional chaining.)




function getProjectDetailsByEmployee(ID = 1011) {

  let result = [];
  softwareCompany.location.headquarters.facilities.buildings.map((building) => {
    building.departments?.map((department) => {
      if (department.name === "Development Hub") {
        //  console.log(department)
        department.teams?.map((team) => {
          team.employees.map((emp) => {
            if (emp.id === ID) {
              // console.log(emp.projects);

              emp.projects.map((project) => {
                //  console.log(project)
                result.push({ id: project.id, name: project.name })
              })
            }
          })
        })
      }
    })
  })
  console.log(result)
}


getProjectDetailsByEmployee();