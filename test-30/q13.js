//.	--- 13. **Get a list of all inspection dates for maintenance, but only where the status was not `"OK"`.**


import { railwayStation } from "./data.js";

function inspectionList() {
  let result = [];
  railwayStation.maintenance.reports.forEach((report) => {
    report.inspections.forEach((inspection) => {
      if (inspection.status !== "OK") {
        result.push(inspection.date)
      }
    })
  })
  return result;
}

console.log(inspectionList())