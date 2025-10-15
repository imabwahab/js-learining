// Q4. Access the "Admin Lead"'s retention rate for the year 2024 using optional chaining and log it to the console.

import { softwareCompany } from "./data.js";


function retentionRate() {
  // console.log(softwareCompany);

  softwareCompany.location.headquarters.facilities.buildings.map((building) => {
    //  console.log(building)
    building.departments?.map((department) => {
      //  console.log(department)
      department.staff?.map((staff) => {
        staff.performanceMetrics?.map((performance) => {
          // console.log(performance);
          if (performance.year == '2024') {
            console.log('retention rate :', performance.kpis.retentionRate)
          }
        })
      })
    })
  })

}


retentionRate()