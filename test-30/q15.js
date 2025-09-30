// 15.	--- 15. **Find the passenger sitting on `Window` seats in any coach.** *Expected: `[ "Ahmed Khan" ]`.* 

import { railwayStation } from "./data.js";


function findWindowSeat(railwayStation) {
  let result = [];
  railwayStation.trains.forEach((train) => {
    train.coaches.forEach((coach) => {
      coach.passengers.forEach((passenger) => {
        if (passenger.ticket.seat.position === "Window") {
          result.push(passenger.name)
        }
      })
    })
  })

  return result;
}


console.log(findWindowSeat(railwayStation))