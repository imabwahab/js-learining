export const softwareCompany = {
  name: "Algotix Technologies",
  founded: 2020,
  location: {
    country: "Pakistan",
    headquarters: {
      city: "Bahawalpur",
      address: "Main Campus Rd, Bahawalpur",
      coordinates: { lat: 29.3957, lng: 71.6833 },
      facilities: {
        buildings: [
          {
            id: "B1",
            name: "Main Office Building",
            floors: 5,
            departments: [
              {
                floor: 1,
                name: "Admin and HR",
                rooms: [
                  { roomId: "R101", type: "Conference", capacity: 20, equipment: ["Projector", "Whiteboard"] },
                  { roomId: "R102", type: "HR Office", capacity: 5, equipment: ["Computers", "Printer"] }
                ],
                staff: [
                  {
                    id: 1001,
                    name: "Admin Lead",
                    role: "HR Manager",
                    contact: { email: "hr@nexorion.com", phone: "+92-300-1234567" },
                    performanceMetrics: [
                      { year: 2023, kpis: { hires: 50, retentionRate: 0.85 } },
                      { year: 2024, kpis: { hires: 75, retentionRate: 0.90 } }
                    ]
                  }
                ]
              },
              {
                floor: 2,
                name: "Development Hub",
                teams: [
                  {
                    name: "Frontend Team",
                    lead: { id: 101, name: "Ali Asghar", role: "Team Lead", skills: ["JavaScript", "React"] },
                    employees: [
                      {
                        id: 1011,
                        name: "Muhammad Waleed",
                        role: "Senior React Developer",
                        skills: ["React", "Next.js", "Redux"],
                        projects: [
                          {
                            id: "P001",
                            name: "DesignMatch",
                            status: "Active",
                            technologies: ["React", "FastAPI"],
                            tasks: [
                              { id: "T1", title: "UI Implementation", completed: true },
                              { id: "T2", title: "Redux Setup", completed: true }
                            ]
                          }
                        ]
                      },
                      {
                        id: 1012,
                        name: "Saqib Raza",
                        role: "UI/UX Designer",
                        skills: ["Figma", "Adobe XD"],
                        projects: [
                          {
                            id: "P002",
                            name: "PDFlo",
                            status: "Completed",
                            technologies: ["Next.js", "LangChain"],
                            tasks: [
                              { id: "T1", title: "Landing Page", completed: true }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: "Backend Team",
                    lead: { id: 201, name: "Hassan Ali", role: "Team Lead" },
                    employees: [
                      {
                        id: 2011,
                        name: "Ahmed Khan",
                        role: "FastAPI Developer",
                        skills: ["Python", "FastAPI"],
                        contributions: { apisDeveloped: 15 }
                      },
                      {
                        id: 2012,
                        name: "Usman",
                        role: "DevOps Engineer",
                        skills: ["Docker", "AWS"]
                      }
                    ]
                  },
                  {
                    name: "AI/ML Team",
                    lead: { id: 301, name: "Dr. Imran", role: "AI Lead" },
                    employees: [
                      { id: 3001, name: "AI Engineer 1", role: "ML Engineer", modelsTrained: 5 },
                      { id: 3002, name: "AI Engineer 2", role: "Data Scientist", modelsTrained: 3 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "B2",
            name: "R&D Lab",
            floors: 3,
            equipmentInventory: { computers: 50, servers: 10 }
          }
        ]
      }
    },
    branchOffices: [
      { city: "Lahore", address: "Tech Park, Lahore", employeeCount: 50 },
      { city: "Karachi", address: "Sea View Rd, Karachi", employeeCount: 30 }
    ]
  },
  revenue: {
    yearly: [
      { year: 2020, amount: 750000, breakdown: { products: 400000, services: 300000 } },
      { year: 2021, amount: 1200000, breakdown: { products: 600000, services: 500000 } },
      { year: 2022, amount: 1500000, breakdown: { products: 800000, services: 600000 } },
      { year: 2023, amount: 2000000, breakdown: { products: 1000000, services: 900000 } },
      { year: 2024, amount: 2500000, breakdown: { products: 1300000, services: 1100000 } }
    ]
  },
  employeesTotal: 200,
  departmentsOverview: {
    engineering: { headcount: 120 },
    marketing: { headcount: 20 },
    sales: { headcount: 40 }
  },
  projectsPortfolio: [
    { id: "PROJ001", name: "Project 1", status: "Active", teamSize: 10 },
    { id: "PROJ002", name: "Project 2", status: "Completed", teamSize: 8 },
    { id: "PROJ003", name: "Project 3", status: "On Hold", teamSize: 12 },
    { id: "PROJ004", name: "Project 4", teamSize: 15 },
    { id: "PROJ005", name: "Project 5", teamSize: 7 }
  ],
  analytics: {
    userBase: {
      activeUsers: 10000,
      growthRate: 0.25,
      demographics: { regions: { Pakistan: 0.6, USA: 0.2 } }
    },
    serverLogs: [
      { logId: 1, level: "Info", message: "Log entry 1" },
      { logId: 2, level: "Warning", message: "Log entry 2" },
      { logId: 3, level: "Error", message: "Log entry 3" }
    ]
  }
};