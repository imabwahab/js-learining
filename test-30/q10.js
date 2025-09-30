// 10.	--- 10. **Check if any warehouse in `logistics` has a parcel that is still "In Transit". If yes, return the parcelId and receiver name.** *Expected: `[{ parcelId: "P001", receiver: "Shop Y" }]`.*

import { railwayStation } from "./data.js";

function findParcel() {
  let result = []
  railwayStation.logistics.cargo.forEach((cargo) => {
    cargo.storedParcels.forEach((stparcel) => {
      stparcel.tracking.forEach((tracking) => {
        if (tracking.status === "In Transit") {
          console.log()
          result.push({parcelId: stparcel.parcelId, receiver:stparcel.receiver.name})
        }
      })
    })
  })

  return result
}

console.log(findParcel())