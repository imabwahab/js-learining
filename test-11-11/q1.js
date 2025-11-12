/*

Accessing Nested Data
Get the email (if available) or name of the HR manager.
Retrieve the city names of all software house offices.
Get the techStack used by the development team lead.
Display the progress of the project "Client Portal UI".

*/

import { softwareHouse } from "./data.js";

// Get the email (if available) or name of the HR manager.
const hrName = softwareHouse.hr.manager.name;
console.log(hrName);

// Retrieve the city names of all software house offices.
const cityName = softwareHouse.location.offices.map(({ city }) => city);
console.log(cityName);

// Get the techStack used by the development team lead.
const { techStack } = softwareHouse.development.teamLead;
console.log(techStack);

// Display the progress of the project "Client Portal UI".
softwareHouse.development.teams.forEach((team) => (
  team.members.forEach((member) => (
    member.projects.forEach((project) => {
      if (project.name === "Client Portal UI") {
        console.log(`Project name: ${project.name} - Project progress : ${project.progress}`)
      }
    })
  ))
))
