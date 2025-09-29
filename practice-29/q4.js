


// Calculate the total number of failed tests across all QA test suites (Lahore Office).
// Expected: 2


import { softwareHouse } from "./data.js"

function testsFailed(softwareHouse) {

  let failedTest;
  softwareHouse.location.offices.forEach((office) => {
    if (office.branch === "Lahore Office") {
      // console.log(office)
      office.departments.forEach((dept) => {
        // console.log(dept)
        dept.teams.forEach((team) => {
          //   console.log(team)
          team.members.forEach((member) => {
            // console.log(member.testSuites.length)
            failedTest = member.testSuites.length
          })
        })
      })
    }
  })

  console.log(failedTest)
}

testsFailed(softwareHouse)