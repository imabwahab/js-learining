// 7.	--- 7. **Get the schedule (arrival & departure) of the last stop of `EXP101`.** *Expected: `{ arrival: "14:30", departure: null }`.*,



import { railwayStation } from "./data.js";


function findArrivalAndDeparture(railwayStation) {
  let result ;
  railwayStation.trains.forEach((train) => {
    if (train.trainId === "EXP101") {
      train.route.forEach((route) => {
        if (route.schedule.departure === null) {
          result  = route.schedule;
        }
      })
    }
  })

  return result;

}

console.log(findArrivalAndDeparture(railwayStation))