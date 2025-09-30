// 18.	--- 18. **Get the report IDs of maintenance reports where the scheduled repair date is after `2025-10-01`.**


import { railwayStation } from "./data.js";

function findInspection() {
 let res = railwayStation.maintenance.reports.filter((report) => {
    report.scheduledRepair.date > '2025-10-01'
  })
  console.log(res)
}


findInspection()