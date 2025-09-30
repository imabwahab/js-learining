// 17. **Find the passenger name who paid using `PayFast` provider.** 

import { railwayStation } from "./data.js";


function findPayFast() {
  let names = [];
  railwayStation.ticketing.online.activeBookings.forEach((acBook) => {
    if (acBook.payment.details.provider) {
      names.push(acBook.passenger.name)
    }
  })

  return names;
}

console.log(findPayFast())