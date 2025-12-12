export const stateBankOfPakistan = {
  name: "State Bank of Pakistan",
  established: 1948,
  type: "Central Bank",
  headquarters: {
    city: "Karachi",
    address: "I.I. Chundrigar Road, Karachi",
    coordinates: { lat: 24.8615, lng: 67.0099 },
    buildings: [
      {
        id: "HQ-B1",
        name: "Main HQ Building",
        floors: 10,
        departments: [
          {
            floor: 1,
            name: "Financial Operations",
            teams: [
              {
                name: "Audit Team",
                lead: {
                  id: 101,
                  name: "Sara Malik",
                  role: "Audit Lead",
                  skills: ["Risk Assessment", "Compliance"],
                  certifications: [
                    { name: "CISA", year: 2020 },
                    { name: "CIA", year: 2022 }
                  ]
                },
                employees: [
                  {
                    id: 1011,
                    name: "Ali Raza",
                    role: "Audit Analyst",
                    skills: ["Internal Audit", "Reporting"],
                    tasks: [
                      {
                        id: "T001",
                        title: "Internal Control Review",
                        completed: true,
                        details: { hoursSpent: 15, priority: "High", comments: ["Reviewed all branches"] }
                      },
                      {
                        id: "T002",
                        title: "Compliance Check",
                        completed: false,
                        details: { hoursSpent: 8, priority: "Medium", comments: ["Pending approval"] }
                      }
                    ],
                    performanceMetrics: [
                      {
                        year: 2023,
                        rating: 4.5,
                        awards: ["Best Auditor"],
                        remarks: ["Excellent reporting", "Met deadlines"]
                      },
                      {
                        year: 2024,
                        rating: 4.7,
                        awards: ["Audit Star"],
                        remarks: ["Met all deadlines", "High accuracy"]
                      }
                    ]
                  },
                  {
                    id: 1012,
                    name: "Fatima Iqbal",
                    role: "Audit Analyst",
                    skills: ["Financial Analysis", "Reporting"],
                    tasks: [
                      {
                        id: "T003",
                        title: "Quarterly Financial Audit",
                        completed: false,
                        details: { hoursSpent: 12, priority: "High", comments: ["Data incomplete"] }
                      },
                      {
                        id: "T004",
                        title: "Risk Assessment",
                        completed: true,
                        details: { hoursSpent: 10, priority: "High", comments: ["Followed guidelines"] }
                      }
                    ]
                  }
                ]
              },
              {
                name: "Policy Team",
                lead: { id: 102, name: "Ayesha Khan", role: "Policy Lead" },
                employees: [
                  {
                    id: 1021,
                    name: "Ahmed Shah",
                    role: "Policy Analyst",
                    skills: ["Economic Analysis", "Policy Drafting"],
                    campaigns: [
                      {
                        id: "P001",
                        name: "Inflation Report 2024",
                        metrics: {
                          reportPages: 120,
                          reviewedByGov: true,
                          sections: ["Monetary", "Fiscal", "Trade"],
                          references: [
                            { source: "IMF", year: 2023 },
                            { source: "World Bank", year: 2023 }
                          ]
                        }
                      },
                      {
                        id: "P002",
                        name: "Monetary Policy Update",
                        metrics: {
                          reportPages: 75,
                          reviewedByGov: true,
                          sections: ["Interest Rates", "Reserve Requirements"],
                          references: [{ source: "SBP Reports", year: 2023 }]
                        }
                      }
                    ]
                  },
                  {
                    id: 1022,
                    name: "Zara Ali",
                    role: "Policy Analyst",
                    skills: ["Market Research", "Documentation"],
                    campaigns: [
                      {
                        id: "P003",
                        name: "Interest Rate Analysis",
                        metrics: {
                          reportPages: 60,
                          reviewedByGov: false,
                          dataSources: [
                            { source: "SBP Reports", lastUpdated: "2024-01-10" },
                            { source: "IMF Data", lastUpdated: "2024-01-05" }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            floor: 2,
            name: "Banking Supervision",
            teams: [
              {
                name: "Licensing Team",
                lead: { id: 201, name: "Imran Khan", role: "Licensing Lead" },
                employees: [
                  {
                    id: 2011,
                    name: "Sana Ahmed",
                    role: "Licensing Officer",
                    skills: ["Bank Licensing", "Regulation Compliance"],
                    certifications: [
                      { name: "Chartered Banker", year: 2021 },
                      { name: "Regulatory Compliance Cert", year: 2022 }
                    ]
                  },
                  {
                    id: 2012,
                    name: "Omar Farooq",
                    role: "Licensing Officer",
                    skills: ["Documentation", "Data Verification"]
                  }
                ]
              },
              {
                name: "Inspection Team",
                lead: { id: 202, name: "Hina Saeed", role: "Inspection Lead" },
                employees: [
                  {
                    id: 2021,
                    name: "Rehan Khan",
                    role: "Inspector",
                    skills: ["Bank Auditing", "Field Visits"],
                    inspections: [
                      {
                        bank: "UBL",
                        date: "2024-01-15",
                        findings: ["Minor Discrepancy"],
                        score: 85,
                        documents: [{ docId: "D001", type: "Audit Report" }]
                      },
                      {
                        bank: "HBL",
                        date: "2024-02-10",
                        findings: ["No Issues"],
                        score: 95,
                        documents: [{ docId: "D002", type: "Audit Certificate" }]
                      }
                    ]
                  },
                  {
                    id: 2022,
                    name: "Sara Qureshi",
                    role: "Inspector",
                    skills: ["Financial Analysis", "Reporting"]
                  }
                ]
              }
            ]
          },
          {
            floor: 3,
            name: "Currency Management",
            teams: [
              {
                name: "Printing & Minting",
                lead: { id: 301, name: "Ali Asghar", role: "Currency Lead" },
                employees: [
                  {
                    id: 3011,
                    name: "Mohsin Tariq",
                    role: "Printing Officer",
                    skills: ["Currency Printing", "Quality Control"]
                  },
                  {
                    id: 3012,
                    name: "Nida Jameel",
                    role: "Minting Officer",
                    skills: ["Coin Production", "Inventory Tracking"]
                  }
                ]
              },
              {
                name: "Distribution Team",
                lead: { id: 302, name: "Hassan Ali", role: "Distribution Lead" },
                employees: [
                  {
                    id: 3021,
                    name: "Amna Raza",
                    role: "Logistics Coordinator",
                    skills: ["Courier Management", "Warehouse Tracking"]
                  },
                  {
                    id: 3022,
                    name: "Bilal Khan",
                    role: "Delivery Officer",
                    skills: ["Distribution Scheduling", "Security"]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  branches: [
    {
      city: "Lahore",
      address: "Shahrah-e-Quaid-e-Azam",
      floorArea: 40000,
      employeeCount: 200,
      departments: [
        {
          name: "Branch Operations",
          teams: [
            {
              name: "Teller Team",
              employees: [
                { id: 401, name: "Ali Riaz", shift: "Morning", transactionsHandled: 500 },
                { id: 402, name: "Sara Khan", shift: "Evening", transactionsHandled: 450 }
              ]
            },
            {
              name: "Customer Support",
              employees: [
                { id: 403, name: "Ahmed Shah", shift: "Morning", ticketsResolved: 120 },
                { id: 404, name: "Zara Ali", shift: "Evening", ticketsResolved: 100 }
              ]
            }
          ]
        }
      ]
    }
  ],
  currency: {
    notes: [
      { denomination: 5000, stock: 100000, expiry: "2035-01-01", vaults: [{ id: "V1", stored: 50000 }, { id: "V2", stored: 50000 }] },
      { denomination: 1000, stock: 200000, expiry: "2030-01-01", vaults: [{ id: "V1", stored: 100000 }, { id: "V2", stored: 100000 }] }
    ],
    coins: [
      { denomination: 10, stock: 2000000, expiry: "2025-01-01", vaults: [{ id: "C1", stored: 1000000 }, { id: "C2", stored: 1000000 }] },
      { denomination: 5, stock: 3000000, expiry: "2030-01-01", vaults: [{ id: "C1", stored: 1500000 }, { id: "C2", stored: 1500000 }] }
    ]
  }
};

// Task

// 1. Calculate the total hours spent on all tasks by employees in the “Audit Team” whose tasks have `priority: "High"`.

// 2. List the names of all employees in the “Audit Team” who have received awards in their performance metrics.

// 3. Retrieve all campaign names under the “Policy Team” where `reviewedByGov` is true and `reportPages` > 100.

// 4. Find all sources and years referenced in campaigns of the “Policy Team” where `reportPages` > 100.

// 5. Calculate the total stock of PKR notes stored across all vaults for 5000 and 1000 denominations combined.

// 6. List the names of all employees in the “Distribution Team” under Currency Management, including their roles and skills.

// 7. Retrieve all inspections conducted by Rehan Khan with a score above 90, including bank names and document types.

// 8. Find all vault IDs that store 5 PKR and 10 PKR coins along with their stored quantities.

// 9. List all tasks in the “Audit Team” that are incomplete and include their comments.

// 10. Retrieve the names of all teams under the “Banking Supervision” department in the Main HQ Building.

// 11. Get all awards and remarks of “Ali Raza” from his performance metrics.

// 12. List all branch employees in Lahore who either handled more than 400 transactions or resolved more than 100 support tickets.

// 13. Retrieve all certifications held by employees in the Licensing Team.

// 14. Find all campaigns for employees in the Policy Team whose skills include “Economic Analysis”.

// 15. Calculate the total number of floors across all buildings in the headquarters.

// 16. List all employee names in the “Printing & Minting” team including their skills.

// 17. Find employees in the Policy Team who manage more than one campaign, along with campaign names.

// 18. Get all comments from incomplete tasks of employees in the Audit Team, grouped by employee name.

// 19. Calculate the total number of items stored across all warehouse sections.

// 20. List all branches and their department team names along with employee names in a nested structure.