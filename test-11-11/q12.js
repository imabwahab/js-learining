

/*

Destructuring & Optional Chaining
Use destructuring to extract name and salary of the teamLead.
Use optional chaining to safely access the second milestone’s due date of "Payroll Automation".

*/

import { softwareHouse } from "./test.js";

// Use destructuring to extract name and salary of the teamLead.
const { name, salary } = softwareHouse.development.teamLead;
console.log(name, salary);

//  Use optional chaining to safely access the second milestone’s due date of "Payroll Automation".
softwareHouse.projects.map((project) => project.milestones?.map((milestone) => console.log(milestone.dueDate)));