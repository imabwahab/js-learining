// Q1. Print the name of the company and the city of its headquarters.

import { softwareCompany } from "./data.js";

// Q1. Using map(), get an array of all team names working inside the "Development Hub" department.
// (Expected output example: ["Frontend Team", "Backend Team", "AI/ML Team"])

function getTeamNamesDevelopnment() {
  let result = [];
  //console.log(softwareCompany);
  softwareCompany.location.headquarters.facilities.buildings.map((building) => {
    building.departments?.map((department) => {
      // console.log(department)
      if (department.name === "Development Hub") {
        console.log(department)
        department.teams?.map((team) => {
          result.push(team.name);
        })
      }
    })
  })
  console.log(result)
}

getTeamNamesDevelopnment()