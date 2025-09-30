export const railwayStation = {
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