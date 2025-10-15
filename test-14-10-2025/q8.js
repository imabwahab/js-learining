// Q8. Create an arrow function getAverageModelsTrained() that returns the average number of models trained by all employees in the "AI/ML Team".

import { softwareCompany } from "./data.js"




const getAverageModelsTrained = () => {
  let total = 0;
  let numberOfEmp = 0;
  let average = 0;

  softwareCompany.location.headquarters.facilities.buildings.map((building) => {
    building.departments?.map((department) => {
      if (department.name === "Development Hub") {
        console.log(department)
        department.teams?.map((team) => {
          if (team.name === "AI/ML Team") {
            console.log(team);
            numberOfEmp = team.employees.length;
            team.employees?.map((employee) => {
              console.log(employee.modelsTrained);
              total += employee.modelsTrained;
            })
          }
        })
      }
    })
  })

  console.log('average ', total / numberOfEmp);

  // console.log(result)
}



getAverageModelsTrained()