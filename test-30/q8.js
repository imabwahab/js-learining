// --- 8. **Find all train staff members who have more than one certification.** *Expected: Only those with `certifications.length > 1`.* 

import { railwayStation } from "./data.js";

function staffWithCertification() {
  let result = [];
  railwayStation.trains.forEach((train) => {
    train.staff.forEach((staff) => {
      if (staff.certifications.length > 1) {
        console.log(staff)
        result.push(staff.details)
      }
    })
  })
  return result;
}
console.log(staffWithCertification())