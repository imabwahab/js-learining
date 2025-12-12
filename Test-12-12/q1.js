import { stateBankOfPakistan } from "./data.js";


// 1. Calculate the total hours spent on all tasks by employees in the “Audit Team” whose tasks have `priority: "High"`.

console.log(stateBankOfPakistan)

function calculateAudit() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Audit Team")
    .flatMap(({ employees }) => employees)
    .flatMap(({tasks}) => tasks)
    .map(({details}) => details)
    .filter(({priority}) => priority === "High")
    .reduce((a, b) => a + b.hoursSpent , 0)
    
}

console.log(calculateAudit())