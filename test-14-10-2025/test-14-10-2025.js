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



// Q1. Using map(), get an array of all team names working inside the "Development Hub" department.
// (Expected output example: ["Frontend Team", "Backend Team", "AI/ML Team"])

function getTeamNamesDevelopnment(softwareCompany) {
  let result = [];
  //console.log(softwareCompany);
  softwareCompany.location.headquarters.facilities.buildings.map((building) => {
    building.departments?.map((department) => {
      // console.log(department)
      if (department.name === "Development Hub") {
        console.log(department)
        department.teams?.map((team) => {
          result.push(team.name);
        })
      }
    })
  })
  console.log(result)
}

getTeamNamesDevelopnment(softwareCompany)



// Q2. Write a function getTotalEmployeesInBranchOffices() that uses reduce() to calculate the total number of employees in all branch offices.



function getTotalEmployeesInBranchOffices(softwareCompany) {
  console.log(softwareCompany);
  const result = softwareCompany.location.branchOffices.map(({ employeeCount }) => employeeCount).reduce((acc, cur) => acc + cur, 0)

  console.log(result)
}


getTotalEmployeesInBranchOffices(softwareCompany)




// 3. Using filter(), find all projects from projectsPortfolio whose status is "Active" or "Completed".


function filteredProjectsPortfolio(softwareCompany) {
  // console.log(softwareCompany.projectsPortfolio)
  const result = softwareCompany.projectsPortfolio.filter((project) => {
    if (project.status === "Active" || project.status === "Completed") {
      return project;
    }
  })

  console.log(result)
}

filteredProjectsPortfolio(softwareCompany)



// Q4. Access the "Admin Lead"'s retention rate for the year 2024 using optional chaining and log it to the console.

function teamLeadInfo() {
  softwareCompany.location.headquarters.facilities.buildings.map((building) => {
    building.departments.map((dept) => {
      dept.staff.map((staff) => {
        staff.performanceMetrics.map((performance) => {
          console.log(performance)
          if (performance.year === 2024) {
            console.log(retentionRate)
          }
        })
      })
    })
  })
}

teamLeadInfo()

// Q5. Write a function getAllEmployeeNames() that returns an array of all employee names across all teams in the "Development Hub" department, using nested map() and flatMap().



function getAllEmployeeNames(softwareCompany) {
  let result = [];
  softwareCompany.location.headquarters.facilities.buildings.map((building) => {
    // console.log(building)
    building.departments?.map((department) => {
      //  console.log(department)
      if (department.name === "Development Hub") {
        // console.log(department)
        department.teams?.map((team) => {
          //  console.log(team);
          team.employees.map((employee) => {
            console.log(employee)
            result.push(employee.name);
          })
        })
      }
    })
  })

  console.log(result)
}

getAllEmployeeNames(softwareCompany)



// Q6. Using reduce(), calculate the total company revenue across all years from revenue.yearly.

function totalRevenue(softwareCompany) {
  let result = softwareCompany.revenue.yearly.map(({ amount }) => amount).reduce((acc, cur) => acc + cur, 0);

  console.log(result)
}

totalRevenue(softwareCompany);



// Q7. Write a function getProjectDetailsByEmployee(employeeId) that finds an employee by their ID and returns an array of all their project names and their statuses.
// (Use, map(), and optional chaining.)




function getProjectDetailsByEmployee(softwareCompany, ID) {

  let result = [];
  softwareCompany.location.headquarters.facilities.buildings.map((building) => {
    building.departments?.map((department) => {
      if (department.name === "Development Hub") {
        //  console.log(department)
        department.teams?.map((team) => {
          team.employees.map((emp) => {
            if (emp.id === ID) {
              // console.log(emp.projects);

              emp.projects.map((project) => {
                //  console.log(project)
                result.push({ id: project.id, name: project.name })
              })
            }
          })
        })
      }
    })
  })
  console.log(result)
}


getProjectDetailsByEmployee(softwareCompany, 1011);


// Q8. Create an arrow function getAverageModelsTrained() that returns the average number of models trained by all employees in the "AI/ML Team".



const getAverageModelsTrained = (softwareCompany) => {
  let total = 0;
  let numberOfEmp = 0;

  softwareCompany.location.headquarters.facilities.buildings.map((building) => {
    building.departments?.map((department) => {
      if (department.name === "Development Hub") {
        console.log(department)
        department.teams?.map((team) => {
          if (team.name === "AI/ML Team") {
            console.log(team);
            numberOfEmp = team.employees.length;
            team.employees?.map((employee) => {
              console.log(employee.modelsTrained);
              total += employee.modelsTrained;
            })
          }
        })
      }
    })
  })

  console.log('average ', total / numberOfEmp);

  // console.log(result)
}



getAverageModelsTrained(softwareCompany);


// Q9. Write an async function getRevenueForecast() that waits 2 seconds (simulate API fetch using setTimeout and Promise) and then logs the highest yearly revenue amount from revenue.yearly.

async function getRevenueForecast(softwareCompany) {
  let hightestRevenue = -999999999;
  return new Promise((resolve) => {
    setTimeout(() => {
      softwareCompany.revenue.yearly.map((year) => {
        if (year.amount > hightestRevenue) {
          hightestRevenue = year.amount;
        }
      })
      resolve(hightestRevenue);
    }, 2000);
  })
}

getRevenueForecast(softwareCompany).then((message) => console.log(message))



// Q10. Implement error handling:
// Create a function getDepartmentOverview(name) that safely returns department details from departmentsOverview.
// If the department doesn't exist, throw an error with the message "Department not found" and handle it gracefully.



function getDepartmentOverview(department) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (softwareCompany.departmentsOverview[department]) {
        // console.log(softwareCompany.departmentsOverview[department])
        resolve(softwareCompany.departmentsOverview[department]);
      }
      else {
        throw new Error('Department not found')
      }
    }, 2000)
  })
}

getDepartmentOverview('engineering').then((message) => console.log(message))




// Q11. Using destructuring and template literals, print this formatted string:
// "Algotix Technologies' headquarters is in Bahawalpur with total 200 employees."


function getInfo(softwareCompany) {
  const { name, employeesTotal } = softwareCompany;
  const { city } = softwareCompany.location.headquarters;

  console.log(`${name} headquarters is in ${city} with total ${employeesTotal} employees.`)
}

getInfo(softwareCompany);



// Q12. Write a debounce() function that debounces a console log of "User is typing..." every 300ms.
// (You only need to show function definition and example usage.)


function debounce() {
  console.log('5s debounce');
}

const button = document.getElementById('btn');

button.addEventListener('click', () => {
  setTimeout(() => {
    debounce();
  }, 5000)
})



// Q13. Using a ternary operator, print whether the "Karachi" branch office has more than 40 employees or not.



function printBranchInfo(softwareCompany) {
  const KarachiBranch = softwareCompany.location.branchOffices.find(({ city }) => city === "Karachi");

  (KarachiBranch.employeeCount > 40) ?
    console.log("Employee is more than 40")
    : console.log("Employee less than 40");
}

printBranchInfo(softwareCompany)


/*
Q14. Write a Promise chain that:

Resolves a list of all projects from projectsPortfolio.

Filters only those with status "Active".

Logs their names in uppercase format.
(Demonstrate .then() chaining properly.)
*/


function getProjectPortfolio(softwareCompany) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = softwareCompany.projectsPortfolio.filter((project) => {
        if (project.status === "Active") {
          return project;
        }
      })

      resolve(result);
    }, 2000)
  })
}


getProjectPortfolio(softwareCompany).then((message) => console.log(message))


