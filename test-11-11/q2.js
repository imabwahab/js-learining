/**
Array Iteration
Print the names of all Frontend Team members.
List all HR employees who joined after 2021.
From the Admin staff, get a list of all assets handled by "Nimra Javed".
Find how many employees are there in total (sum of HR, Development, and Admin staff).

 */

import { softwareHouse } from "./data.js";

// Print the names of all Frontend Team members.
softwareHouse.development.teams.filter(({ name }) => name === "Frontend Team").flatMap(({ members }) => members).forEach(({ name }) => console.log(name));


// List all HR employees who joined after 2021.
function findHr(softwareHouse) {
  let hr = [];
  const newDate = new Date('2021-12-31');
  if (newDate < softwareHouse.hr.manager.joinedOn) {
    hr.push(softwareHouse.hr.manager.name);
    console.log(softwareHouse.hr.manager);
  }
  softwareHouse.hr.employees.filter(({ name, joinedOn }) => {
    if (joinedOn > newDate) {
      hr.push(name)
    }
  })
  console.log(hr)
}
findHr(softwareHouse)

// From the Admin staff, get a list of all assets handled by "Nimra Javed".
function assetsHandledByNimra() {
  let assets;
  softwareHouse.admin.staff.filter(({ name, assetsHandled }) => {
    if (name === "Nimra Javed") {
      return assetsHandled;
    }
  }).forEach((asset) => console.log(asset))

  console.log(assets)
}

assetsHandledByNimra()




// Find how many employees are there in total (sum of HR, Development, and Admin staff).

function getEmployees() {
  let hrEmployees = softwareHouse.hr.employees.length;

  let devEmployees = softwareHouse.development.teams.map(({ members }) => members).length;

  let adminEmployees = softwareHouse.admin.staff.length;

  console.log(hrEmployees + devEmployees + adminEmployees)


}

getEmployees()