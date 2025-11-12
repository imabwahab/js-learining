/*
Using Reduce
Calculate the total payroll of the entire company using .reduce().
Compute the total number of assets the admin team manages.
Use reduce to find the average progress of all development projects.
*/

import { softwareHouse } from "./test.js";

function totalPayroll(softwareHouse) {
  let hrManagerSalary = softwareHouse.hr.manager.salary;

  let hrEmployees = softwareHouse.hr.employees.map(({ salary }) => salary);

  let othersHrEmployeessSalary = hrEmployees.reduce((a, b) => a + b, 0);


  console.log(hrManagerSalary + othersHrEmployeessSalary);

  let teamLeadSalary = softwareHouse.development.teamLead.salary;

  let totalDevSalary = [];
  softwareHouse.development.teams.map((team) => {
    totalDevSalary = team.members.map(({ salary }) => salary).reduce((a, b) => a + b, 0);
  });

  console.log(totalDevSalary + teamLeadSalary);

  let adminHeadSalary = softwareHouse.admin.head.salary;


  let adminEmployeeSalary = softwareHouse.admin.staff.map(({ salary }) => salary).reduce((a, b) => a + b, 0);

  console.log(adminHeadSalary + adminEmployeeSalary + totalDevSalary + teamLeadSalary + hrManagerSalary + othersHrEmployeessSalary);

}

totalPayroll(softwareHouse)


// Use reduce to find the average progress of all development projects.
function totalAssestManagedByAdmin(softwareHouse) {
  let totalAssetsData = []
  softwareHouse.admin.staff.forEach((staff) => {
    staff.assetsHandled?.map(({ count }) => totalAssetsData.push(count));
  });
  const totalAssets = totalAssetsData.reduce((a, b) => a + b, 0)
  console.log(totalAssets);
}

totalAssestManagedByAdmin(softwareHouse);


// Use reduce to find the average progress of all development projects.

function avergageofDevelopmentproject() {
  softwareHouse.projects.map((project) => )
}