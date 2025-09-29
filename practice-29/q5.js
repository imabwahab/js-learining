
import { softwareHouse } from "./data.js";
// Create an array of all project budgets, grouped by client name.

// Expected:
// [
//   { client: "MediCare Inc", budgets: [75000] },
//   { client: "SafeBank Ltd", budgets: [150000] }
// ]


function projectBudget() {
  const budgetInfo = [];
  softwareHouse.clients.forEach((client) => {
    client.projects.forEach((project) => {
      console.log(project.budget)
      budgetInfo.push({ client: client.name, budgets: [project.budget] })
    })
  });
  return budgetInfo;
}


console.log(projectBudget())

