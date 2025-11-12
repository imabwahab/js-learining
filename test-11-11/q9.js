/*

Combining Arrays
Merge all HR, Development, and Admin employees into one unified array with a new key department.
After merging, sort the array by salary (descending).

*/

import { softwareHouse } from "./test.js";

function mergeAllHRs(softwareHouse) {
  let allEmployees = [];
  softwareHouse.hr.employees.forEach((emp) => allEmployees.push(emp));
  softwareHouse.development.teams.forEach((team) =>
    team.members.forEach((emp) => allEmployees.push(emp))
  );
  softwareHouse.admin.staff.forEach((staff) => allEmployees.push(staff))



  console.log(allEmployees)
}

mergeAllHRs(softwareHouse)

function sortAllEmployess(softwareHouse) {
  let allEmployees = [];
  softwareHouse.hr.employees.forEach((emp) => allEmployees.push(emp));
  softwareHouse.development.teams.forEach((team) =>
    team.members.forEach((emp) => allEmployees.push(emp))
  );
  softwareHouse.admin.staff.forEach((staff) => allEmployees.push(staff));

  const sorted = allEmployees.sort((a, b) => b.salary - a.salary);
  console.log(sorted)
}

sortAllEmployess(softwareHouse)