// 16.	--- 16. **Get a list of all unique payment methods used today across counters and online bookings.** *Expected: `[ "Credit Card", "Mobile Wallet" ]`.* -


import { railwayStation } from "./data.js";

function uniquePaymentMethod() {
  let methods = new Set();
  railwayStation.ticketing.counters.forEach((counter) => {
    counter.bookingsToday.forEach((booking) => {
      methods.add(booking.payment.method);
    })
  })

  railwayStation.ticketing.online.activeBookings.forEach((acBook) => {
    methods.add(acBook.payment.method);
  })

  return [...methods]
}

console.log(uniquePaymentMethod())