// Q5. Write a function getAllEmployeeNames() that returns an array of all employee names across all teams in the "Development Hub" department, using nested map() and flatMap().


import { softwareCompany } from "./data.js";


function getAllEmployeeNames() {
  let result = [];
  softwareCompany.location.headquarters.facilities.buildings.map((building) => {
    // console.log(building)
    building.departments?.map((department) => {
      //  console.log(department)
      if (department.name === "Development Hub") {
        // console.log(department)
        department.teams?.map((team) => {
          //  console.log(team);
          team.employees.map((employee) => {
            console.log(employee)
            result.push(employee.name);
          })
        })
      }
    })
  })

  console.log(result)
}

getAllEmployeeNames()