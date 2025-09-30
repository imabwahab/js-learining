//	--- 4. **Write a function that returns the list of zones where any CCTV camera is `Inactive`.** *Expected: `["North Wing"]`.*

import { railwayStation } from "./data.js";

function zoneInactive(railwayStation) {
  let result;
  railwayStation.security.cctv.zones.forEach((zone) => {
    zone.cameras.forEach((camera) => {
      if (camera.status === "Inactive") {
        // console.log(zone.zone)
        result = zone.zone;
      }
    })
  })

  return result;
}

console.log(zoneInactive(railwayStation))