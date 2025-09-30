// 1.	**Find all passenger names across all trains, no matter which coach they are in.** *Hint: You need to flatten nested arrays of `trains → coaches → passengers`.*

import { railwayStation } from "./data.js";

function passengerFind() {
  let total = [];
  railwayStation.trains.forEach((train) => {
    train.coaches.forEach((coach) =>{
      coach.passengers.forEach((passenger) => {
        total.push(passenger.name);
      })
    })
  })

  console.log(total);
}

passengerFind()