
const railwayStation = {
  station: {
    id: "STN001",
    name: "Central City Railway Station",
    location: {
      address: {
        street: "Station Road",
        city: "Central City",
        state: "Province A",
        country: "Country Z",
        geo: { lat: 33.6844, lng: 73.0479 }
      },
      zones: [
        {
          zoneId: "Z1",
          name: "North Wing",
          facilities: ["Waiting Room", "Restrooms"],
          staffAssigned: [
            { role: "Security", staff: [{ id: "S001", name: "Imran" }] },
            { role: "Cleaning", staff: [{ id: "S002", name: "Sara" }] }
          ]
        },
        {
          zoneId: "Z2",
          name: "South Wing",
          facilities: ["Food Court", "Parking"],
          staffAssigned: [
            { role: "Maintenance", staff: [{ id: "S003", name: "Kamran" }] }
          ]
        }
      ]
    },
    facilities: {
      emergency: {
        medical: { doctors: 3, ambulances: 2 },
        fireSafety: { extinguishers: 50, drills: ["Quarterly", "Annual"] }
      },
      premium: ["VIP Lounge", "Smart Ticket Machines"]
    }
  },

  trains: [
    {
      trainId: "EXP101",
      name: "Express Line",
      type: "Express",
      route: [
        {
          stopId: "ST1",
          name: "Central City",
          schedule: { arrival: "10:00", departure: "10:30" }
        },
        {
          stopId: "ST2",
          name: "Midtown",
          schedule: { arrival: "12:00", departure: "12:15" }
        },
        {
          stopId: "ST3",
          name: "Northville",
          schedule: { arrival: "14:30", departure: null }
        }
      ],
      coaches: [
        {
          coachId: "C1",
          type: "Sleeper",
          capacity: 72,
          passengers: [
            {
              passengerId: "P001",
              name: "Ahmed Khan",
              ticket: {
                booking: {
                  id: "B001",
                  status: "Confirmed",
                  fareDetails: { baseFare: 1200, gst: 300, total: 1500 }
                },
                seat: { number: 12, position: "Window" }
              },
              luggage: [{ bagId: "L1", weight: "20kg", type: "Suitcase" }]
            }
          ]
        },
        {
          coachId: "C2",
          type: "AC",
          capacity: 60,
          passengers: [
            {
              passengerId: "P002",
              name: "Fatima Noor",
              ticket: {
                booking: {
                  id: "B002",
                  status: "Waiting",
                  fareDetails: { baseFare: 1400, gst: 100, total: 1500 }
                },
                seat: { number: 5, position: "Middle" }
              },
              luggage: [{ bagId: "L2", weight: "8kg", type: "Backpack" }]
            }
          ]
        }
      ],
      staff: [
        {
          role: "Driver",
          details: { name: "Imran Ali", experience: "10 years" },
          certifications: ["Safety Certified", "Route Trained"]
        },
        {
          role: "Guard",
          details: { name: "Sara Khan", experience: "7 years" },
          certifications: ["Security Clearance"]
        }
      ]
    }
  ],

  ticketing: {
    counters: [
      {
        id: "C1",
        staff: { id: "S010", name: "Bilal" },
        bookingsToday: [
          {
            bookingId: "B1001",
            passenger: { name: "John Doe", age: 42 },
            trainId: "EXP101",
            payment: {
              method: "Credit Card",
              details: { bank: "ABC Bank", transactionId: "TXN12345" }
            }
          }
        ]
      },
      {
        id: "C2",
        staff: { id: "S011", name: "Nida" },
        bookingsToday: []
      }
    ],
    online: {
      activeBookings: [
        {
          bookingId: "B1002",
          passenger: { name: "Ali Raza", age: 25 },
          trainId: "EXP101",
          payment: {
            method: "Mobile Wallet",
            details: { provider: "PayFast", ref: "PF123" }
          }
        }
      ]
    }
  },

  security: {
    cctv: {
      total: 150,
      zones: [
        {
          zone: "North Wing",
          cameras: [
            { camId: "C001", status: "Active" },
            { camId: "C002", status: "Inactive" }
          ]
        }
      ]
    },
    guards: [
      {
        guardId: "G1",
        name: "Arif",
        shifts: [
          { day: "Monday", time: "Morning" },
          { day: "Tuesday", time: "Night" }
        ]
      }
    ]
  },

  logistics: {
    cargo: [
      {
        warehouseId: "W1",
        capacity: "2000 tons",
        storedParcels: [
          {
            parcelId: "P001",
            sender: { name: "Factory X", address: "Zone 3" },
            receiver: { name: "Shop Y", address: "Market Street" },
            tracking: [
              { date: "2025-09-20", status: "Received" },
              { date: "2025-09-21", status: "In Transit" }
            ]
          }
        ]
      }
    ]
  },

  maintenance: {
    reports: [
      {
        reportId: "R001",
        section: "Track 7",
        inspections: [
          { date: "2025-09-20", status: "OK" },
          { date: "2025-09-28", status: "Needs Alignment" }
        ],
        scheduledRepair: { date: "2025-10-05", assignedTeam: ["T1", "T2"] }
      }
    ]
  }
};

// 1.	**Find all passenger names across all trains, no matter which coach they are in.** *Hint: You need to flatten nested arrays of `trains → coaches → passengers`.*


function passengerFind(railwayStation) {
  let total = [];
  railwayStation.trains.forEach((train) => {
    train.coaches.forEach((coach) => {
      coach.passengers.forEach((passenger) => {
        total.push(passenger.name);
      })
    })
  })

  return total;
}

console.log(passengerFind(railwayStation))


// 2.	 --- 2. **Get the total number of confirmed tickets vs waiting tickets for train `EXP101`.** *Use `reduce` over passengers to calculate counts.* 


function totalTickets(railwayStation) {
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
  return totalTickets
}

console.log(totalTickets(railwayStation));


// 3.	--- 3. **Extract the names of all staff (station staff, train staff, counter staff, security guards) in one flat array of strings.** *Station staff is nested under `station.location.zones → staffAssigned → staff`, train staff is in `trains → staff`, ticket counter staff in `ticketing.counters → staff`, and security guards in `security.guards`.* 

function staffNames(railwayStation) {
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


console.log(staffNames(railwayStation));



//	--- 4. **Write a function that returns the list of zones where any CCTV camera is `Inactive`.** *Expected: `["North Wing"]`.*


function zoneInactive(railwayStation) {
  let result;
  railwayStation.security.cctv.zones.forEach((zone) => {
    zone.cameras.forEach((camera) => {
      if (camera.status === "Inactive") {
        // console.log(zone.zone)
        result = zone.zone;
      }
    })
  })

  return result;
}

console.log(zoneInactive(railwayStation))


// --- 5. **Find the total revenue collected so far from all ticket bookings (counters + online + train passengers), using the `fareDetails.total` and payment details.** *Careful: passengers inside trains already have a `fareDetails.total`, and counters/online bookings have payments (but no fare). You must merge both sources properly.* 

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


// 6.	--- 6. **Find all passengers who have luggage over 10kg, and return an array of objects with `{ passengerName, luggageWeight }`.** 


function luggageWeight(railwayStation) {

  let pass = []
  railwayStation.trains.forEach((train) => {
    train.coaches.forEach((coach) => {
      coach.passengers.forEach((passenger) => {
        passenger.luggage.forEach((luggage) => {
          if (luggage.weight == "20kg") {
            pass.push({ passengerName: passenger.name, weight: luggage.weight })
          }
        })
      })
    })
  })

  return pass;
}

console.log(luggageWeight(railwayStation));




// 7.	--- 7. **Get the schedule (arrival & departure) of the last stop of `EXP101`.** *Expected: `{ arrival: "14:30", departure: null }`.*,



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



// --- 8. **Find all train staff members who have more than one certification.** *Expected: Only those with `certifications.length > 1`.* 


function staffWithCertification(railwayStation) {
  let result = [];
  railwayStation.trains.forEach((train) => {
    train.staff.forEach((staff) => {
      if (staff.certifications.length > 1) {
        console.log(staff)
        result.push(staff.details)
      }
    })
  })
  return result;
}
console.log(staffWithCertification(railwayStation))



// 9.	--- 9. **List all the guard names and the days they are assigned shifts.** *Format: `{ guardName: "Arif", days: ["Monday", "Tuesday"] }`.* 


function securityAssignedDay(railwayStation) {
  let result = [];
  let days = [];
  railwayStation.security.guards.forEach((guard) => {
    guard.shifts.forEach((shift) => {
      days.push(shift.day)
    })
    result.push({ guardName: guard.name, days: days })
  })
  console.log(result)

}

securityAssignedDay(railwayStation);


// 10.	--- 10. **Check if any warehouse in `logistics` has a parcel that is still "In Transit". If yes, return the parcelId and receiver name.** *Expected: `[{ parcelId: "P001", receiver: "Shop Y" }]`.*


function findParcel(railwayStation) {
  let result = []
  railwayStation.logistics.cargo.forEach((cargo) => {
    cargo.storedParcels.forEach((stparcel) => {
      stparcel.tracking.forEach((tracking) => {
        if (tracking.status === "In Transit") {
          console.log()
          result.push({ parcelId: stparcel.parcelId, receiver: stparcel.receiver.name })
        }
      })
    })
  })

  return result
}

console.log(findParcel(railwayStation))




// --- 11. **Find the total number of doctors + ambulances available in emergency facilities.** 



function findEmergencyInfo(railwayStation) {
  let result = {}
  result = { doctors: railwayStation.station.facilities.emergency.medical.doctors, ambulances: railwayStation.station.facilities.emergency.medical.ambulances }

  return result;
}

console.log(findEmergencyInfo(railwayStation))



// 12.	--- 12. **Return the names of passengers whose booking status is `Waiting`, along with their train name.** 


function findWaiting(railwayStation) {
  let result = [];
  railwayStation.trains.forEach((train) => {
    train.coaches.forEach((coach) => {
      coach.passengers.forEach((passenger) => {
        if (passenger.ticket.booking.status === "Waiting") {
          console.log(passenger)
          result.push({ name: passenger.name, status: passenger.ticket.booking.status });
        }
      })
    })
  })

  return result;
}

console.log(findWaiting(railwayStation));


//.	--- 13. **Get a list of all inspection dates for maintenance, but only where the status was not `"OK"`.**



function inspectionList(railwayStation) {
  let result = [];
  railwayStation.maintenance.reports.forEach((report) => {
    report.inspections.forEach((inspection) => {
      if (inspection.status !== "OK") {
        result.push(inspection.date)
      }
    })
  })
  return result;
}

console.log(inspectionList(railwayStation))


// 14.	 --- 14. **Write a function that returns the names of all staff working in the `North Wing`.** *Hint: Go into `station.location.zones` → find zone `"North Wing"` → extract staffAssigned.* 

function staffAssigned(railwayStation) {
  let result;
  railwayStation.station.location.zones.forEach((zone) => {
    if (zone.name === "North Wing") {
      result = zone.staffAssigned;
    }
  })

  return result;
}

console.log(staffAssigned(railwayStation));



// 15.	--- 15. **Find the passenger sitting on `Window` seats in any coach.** *Expected: `[ "Ahmed Khan" ]`.* 



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




// 16.	--- 16. **Get a list of all unique payment methods used today across counters and online bookings.** *Expected: `[ "Credit Card", "Mobile Wallet" ]`.* -



function uniquePaymentMethod(railwayStation) {
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

console.log(uniquePaymentMethod(railwayStation))



// 17. **Find the passenger name who paid using `PayFast` provider.** 



function findPayFast(railwayStation) {
  let names = [];
  railwayStation.ticketing.online.activeBookings.forEach((acBook) => {
    if (acBook.payment.details.provider) {
      names.push(acBook.passenger.name)
    }
  })

  return names;
}

console.log(findPayFast(railwayStation))


// 18.	--- 18. **Get the report IDs of maintenance reports where the scheduled repair date is after `2025-10-01`.**


import { railwayStation } from "./data.js";

function findInspection() {
 let res = railwayStation.maintenance.reports.filter((report) => {
    report.scheduledRepair.date > '2025-10-01'
  })
  console.log(res)
}


findInspection();

// --- 19. **Return the name of the driver assigned to train `EXP101`.**

// 19. data not available  - skipped.



//	--- 20. **Deep search challenge**: Write a generic function `findById(obj, key, value)` that searches through the whole dataset and returns the path where that key-value pair is found (e.g., find `"P002"` in `passengerId`). ---




