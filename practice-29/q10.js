import { softwareHouse } from "./data.js";

// Count how many certifications all backend engineers have in total.

// Example if more backend engineers were added
// Expected: e.g., 2



function totalCertification() {
  let certificates;
  softwareHouse.location.offices.forEach((office) => {
    office.departments.forEach((dept) => {
      dept.teams?.forEach((team) => {
        if (team.teamName === "Backend") {
          console.log(team)
          team.members.forEach((member) => {
            certificates = member.certifications.length
          })
        }
      })
    })
  })

  return certificates;
}

console.log(totalCertification())