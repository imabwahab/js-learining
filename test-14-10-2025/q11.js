// Q11. Using destructuring and template literals, print this formatted string:
// "Algotix Technologies' headquarters is in Bahawalpur with total 200 employees."


import { softwareCompany } from "./data.js";
function getInfo() {
  const { name, employeesTotal } = softwareCompany;
  const { city } = softwareCompany.location.headquarters;

  console.log(`${name} headquarters is in ${city} with total ${employeesTotal} employees.`)
}

getInfo();