/*
Numbers & Math
Find the total salary expense of the HR department.
Calculate the average salary of the Development Team.
Get the total project budget (sum of all budget fields).

*/


// Find the total salary expense of the HR department.
import { softwareHouse } from "./test.js";

function salaryExpense(softwareHouse) {
  let hrManagerSalary = softwareHouse.hr.manager.salary;

  let othersSalary = softwareHouse.hr.employees.map(({ salary }) => salary).reduce((a, b) => a + b, 0);

  console.log(hrManagerSalary + othersSalary)
}

salaryExpense(softwareHouse)


// Calculate the average salary of the Development Team.

function averageSalaryDevs(softwareHouse) {
  let totalSalary = [];
  softwareHouse.development.teams.map((team) => {
    team.members.map(({ salary }) => totalSalary.push(salary));
  });

  console.log(totalSalary);

  let average = totalSalary.reduce((a, b) => a + b, 0);
  console.log(average / totalSalary.length)

}


averageSalaryDevs(softwareHouse);


// Get the total project budget (sum of all budget fields).


function projectBudget() {
  let totalBudget = softwareHouse.projects.map(({ budget }) => budget).reduce((a, b) => a + b, 0);
  console.log(totalBudget)
}
projectBudget()


/*
Numbers & Math
Find the total salary expense of the HR department.
Calculate the average salary of the Development Team.
Get the total project budget (sum of all budget fields).

*/


// Find the total salary expense of the HR department.
import { softwareHouse } from "./test.js";

function salaryExpense(softwareHouse) {
  let hrManagerSalary = softwareHouse.hr.manager.salary;

  let othersSalary = softwareHouse.hr.employees.map(({ salary }) => salary).reduce((a, b) => a + b, 0);

  console.log(hrManagerSalary + othersSalary)
}

salaryExpense(softwareHouse)


// Calculate the average salary of the Development Team.

function averageSalaryDevs(softwareHouse) {
  let totalSalary = [];
  softwareHouse.development.teams.map((team) => {
    team.members.map(({ salary }) => totalSalary.push(salary));
  });

  console.log(totalSalary);

  let average = totalSalary.reduce((a, b) => a + b, 0);
  console.log(average / totalSalary.length)

}


averageSalaryDevs(softwareHouse);


// Get the total project budget (sum of all budget fields).


function projectBudget() {
  let totalBudget = softwareHouse.projects.map(({ budget }) => budget).reduce((a, b) => a + b, 0);
  console.log(totalBudget)
}
projectBudget()