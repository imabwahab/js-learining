// Q10. Implement error handling:
// Create a function getDepartmentOverview(name) that safely returns department details from departmentsOverview.
// If the department doesn't exist, throw an error with the message "Department not found" and handle it gracefully.

import { softwareCompany } from "./data.js";


function getDepartmentOverview(department) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (softwareCompany.departmentsOverview[department]) {
        // console.log(softwareCompany.departmentsOverview[department])
        resolve(softwareCompany.departmentsOverview[department]);
      }
      else {
        throw new Error('Department not found')
      }
    }, 2000)
  })
}

getDepartmentOverview('engineering').then((message) => console.log(message))