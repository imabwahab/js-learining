export const softwareHouse = {
  name: "TechVision Solutions",
  founded: 2015,
  location: {
    country: "Pakistan",
    city: "Karachi",
    offices: [
      {
        branch: "Headquarters",
        address: "Shahrah-e-Faisal, Karachi",
        departments: [
          {
            name: "Development",
            teams: [
              {
                teamName: "Frontend",
                stack: ["React", "Next.js", "TypeScript"],
                members: [
                  {
                    id: 1,
                    name: "Ali Khan",
                    role: "Senior Frontend Developer",
                    projects: [
                      {
                        projectId: "P101",
                        title: "E-commerce Platform",
                        technologies: ["React", "Redux", "Node.js"],
                        tasks: [
                          { taskId: 1, title: "Product Listing UI", status: "Completed" },
                          { taskId: 2, title: "Cart Functionality", status: "In Progress" }
                        ]
                      }
                    ]
                  },
                  {
                    id: 2,
                    name: "Sara Ahmed",
                    role: "UI/UX Designer",
                    designTools: ["Figma", "Adobe XD"],
                    assignedProjects: ["P101", "P102"]
                  }
                ]
              },
              {

                teamName: "Backend",
                stack: ["Node.js", "Express", "MongoDB"],
                members: [
                  {
                    id: 3,
                    name: "Bilal Hussain",
                    role: "Backend Engineer",
                    certifications: [
                      { title: "AWS Certified Developer", year: 2022 },
                      { title: "MongoDB Professional", year: 2023 }
                    ],
                    projects: [
                      {
                        projectId: "P102",
                        title: "Chat Application",
                        modules: [
                          { module: "Authentication", status: "Completed" },
                          { module: "Messaging", status: "Pending" }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: "HR",
            employees: [
              {
                id: 101,
                name: "Nida",
                role: "HR Manager",
                policies: {
                  leaves: { casual: 10, annual: 14, sick: 7 },
                  workHours: "9AM - 6PM"
                }
              }
            ]
          }
        ]
      },
      {
        branch: "Lahore Office",
        address: "Gulberg, Lahore",
        departments: [
          {
            name: "QA",
            teams: [
              {
                teamName: "Automation",
                tools: ["Selenium", "Cypress"],
                members: [
                  {
                    id: 201,
                    name: "Hassan Raza",
                    role: "QA Engineer",
                    testSuites: [
                      { suite: "Regression", passed: 120, failed: 5 },
                      { suite: "Smoke", passed: 40, failed: 0 }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  clients: [
    {
      id: "C01",
      name: "GlobalMart",
      country: "USA",
      projects: [
        {
          projectId: "P101",
          durationMonths: 8,
          budget: 50000,
          milestones: [
            { milestoneId: 1, title: "UI Completion", status: "Completed" },
            { milestoneId: 2, title: "Backend APIs", status: "In Progress" }
          ]
        }
      ]
    },
    {
      id: "C02",
      name: "FinTech Pro",
      country: "UK",
      projects: [
        {
          projectId: "P103",
          durationMonths: 12,
          budget: 120000,
          milestones: [
            { milestoneId: 1, title: "Requirement Gathering", status: "Completed" },
            { milestoneId: 2, title: "MVP Release", status: "Pending" }
          ]
        }
      ]
    }
  ]
};