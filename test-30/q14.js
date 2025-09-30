// 14.	 --- 14. **Write a function that returns the names of all staff working in the `North Wing`.** *Hint: Go into `station.location.zones` → find zone `"North Wing"` → extract staffAssigned.* 

import { railwayStation } from "./data.js";

function staffAssigned() {
  let result;
  railwayStation.station.location.zones.forEach((zone) => {
    if (zone.name === "North Wing") {
      result = zone.staffAssigned;
    }
  })

  return result;
}

console.log(staffAssigned())