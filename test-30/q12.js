// 12.	--- 12. **Return the names of passengers whose booking status is `Waiting`, along with their train name.** 

import { railwayStation } from "./data.js";

function findWaiting(railwayStation) {
  let result = [];
  railwayStation.trains.forEach((train) => {
    train.coaches.forEach((coach) => {
      coach.passengers.forEach((passenger) => {
        if (passenger.ticket.booking.status === "Waiting") {
          console.log(passenger)
          result.push({name: passenger.name, status : passenger.ticket.booking.status});
        }
      })
    })
  })

  return result;
}

console.log(findWaiting(railwayStation));