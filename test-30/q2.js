import { railwayStation } from "./data.js";

// 2.	 --- 2. **Get the total number of confirmed tickets vs waiting tickets for train `EXP101`.** *Use `reduce` over passengers to calculate counts.* 


function totalTickets() {
  let totalTickets = 0;
  railwayStation.trains.forEach((train) => {
    train.coaches.forEach((coach) => {
      //console.log(coach.passengers.length)
      totalTickets += coach.passengers.length
    });
  });

  railwayStation.ticketing.counters.forEach((counter) => {
    totalTickets += counter.bookingsToday.length;

  })

  totalTickets += railwayStation.ticketing.online.activeBookings.length;
  console.log(totalTickets)
}

totalTickets()