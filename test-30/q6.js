// 6.	--- 6. **Find all passengers who have luggage over 10kg, and return an array of objects with `{ passengerName, luggageWeight }`.** 

import { railwayStation } from "./data.js";

function luggageWeight() {

  let pass = []
  railwayStation.trains.forEach((train) => {
    train.coaches.forEach((coach) => {
      coach.passengers.forEach((passenger) => {
        passenger.luggage.forEach((luggage) => {
          if (parseInt(luggage.weight) > 10) {
            pass.push({passengerName : passenger.name, weight: luggage.weight})
          }
        })
      })
    })
  })

  return pass;
}

console.log(luggageWeight())