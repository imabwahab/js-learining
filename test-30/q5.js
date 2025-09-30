// --- 5. **Find the total revenue collected so far from all ticket bookings (counters + online + train passengers), using the `fareDetails.total` and payment details.** *Careful: passengers inside trains already have a `fareDetails.total`, and counters/online bookings have payments (but no fare). You must merge both sources properly.* 

import { railwayStation } from "./data.js";
function totalFare(railwayStation) {

  let fare = 0;
  railwayStation.trains.forEach((train) => {
    train.coaches.forEach((coach) => {
      coach.passengers.forEach((passenger) => {
        console.log(passenger.ticket.booking.fareDetails)
        fare += passenger.ticket.booking.fareDetails.total;
      })
    })
  })

  return fare;
}

console.log(totalFare(railwayStation))