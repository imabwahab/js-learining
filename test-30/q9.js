// 9.	--- 9. **List all the guard names and the days they are assigned shifts.** *Format: `{ guardName: "Arif", days: ["Monday", "Tuesday"] }`.* 

import { railwayStation } from "./data.js";

function securityAssignedDay() {
  let result = [];
  let days = [];
  railwayStation.security.guards.forEach((guard) => {
    guard.shifts.forEach((shift) => {
      days.push(shift.day)
    })
    result.push({ guardName: guard.name, days: days })
  })
  console.log(result)

}

securityAssignedDay();
