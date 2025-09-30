// 3.	--- 3. **Extract the names of all staff (station staff, train staff, counter staff, security guards) in one flat array of strings.** *Station staff is nested under `station.location.zones → staffAssigned → staff`, train staff is in `trains → staff`, ticket counter staff in `ticketing.counters → staff`, and security guards in `security.guards`.* 


import { railwayStation } from "./data.js";
function staffNames() {
  let namesOfStaff = new Set();
  railwayStation.station.location.zones.forEach((zone) => {
    zone.staffAssigned.forEach((stAssign) => {
      stAssign.staff?.forEach((st) => {
        namesOfStaff.add(st.name)
      })
    })
  })

  railwayStation.trains.forEach((train) => {
    train.staff.forEach((staff) => {
      namesOfStaff.add(staff.details.name)
    })
  })

  railwayStation.ticketing.counters?.forEach((counter) => {
    namesOfStaff.add(counter.staff.name)
  })

  return [...namesOfStaff]
}


console.log(staffNames());