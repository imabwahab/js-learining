/**
 
Mapping
Create an array of all employee names with their salaries.
Map over all development team members and extract their project names.
Generate a list of cities with employeesCount from the offices array.
 */

import { softwareHouse } from "./test.js";

function allEmployees(softwareHouse) {
  let allEmployees = [];
  {
    const { name, salary } = softwareHouse.hr.manager;
    allEmployees.push({ name, salary });
  }
  softwareHouse.hr.employees.map(({ name, salary }) => {
    allEmployees.push({ name, salary });
  });

  {
    const { name, salary } = softwareHouse.development.teamLead;
    allEmployees.push({ name, salary })
  }

  softwareHouse.development.teams.map((team) => {
    team.members.map(({ name, salary }) => {
      allEmployees.push({ name, salary });
    })
  });

  {
    const { name, salary } = softwareHouse.admin.head;
    allEmployees.push({ name, salary });
  }
  softwareHouse.admin.staff.map(({ name, salary }) => {
    allEmployees.push({ name, salary })
  });

}

allEmployees(softwareHouse);



// Map over all development team members and extract their project names.

function developmentTeam(softwareHouse) {
  let pro = [];
  softwareHouse.development.teams.map((team) => {
    team.members.map(({ name, projects }) => {
      let projectName;
      projects.map((project) => {
        projectName = project.name;
        console.log(name, project.name);

        pro.push({ name, projectName: project.name });
      })

    })
  })

  console.log(pro)
}

developmentTeam(softwareHouse);


// Generate a list of cities with employeesCount from the offices array.

function employeesCity(softwareHouse) {
  let employess = []
  softwareHouse.location.offices.map(({ city, employeesCount }) => {
    employess.push({ city, employeesCount })
  })
  console.log(employess)

}

employeesCity(softwareHouse)

