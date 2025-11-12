export const softwareHouse = {
  name: "TechNova Solutions",
  established: new Date("2018-01-15"),
  registrationNo: "TN-9081-LHR",
  revenue: 52000000,
  isActive: true,

  // Object containing nested objects & arrays
  location: {
    country: "Pakistan",
    offices: [
      {
        city: "Lahore",
        address: "45-B DHA Phase 4",
        employeesCount: 42,
      },
      {
        city: "Karachi",
        address: "22-G Clifton Block 2",
        employeesCount: 30,
      },
    ],
  },

  // HR Department (object with array of objects)
  hr: {
    manager: {
      id: 101,
      name: "Sara Khan",
      position: "HR Manager",
      joinedOn: new Date("2020-03-10"),
      salary: 95000,
      reports: [
        {
          month: "October 2025",
          attendanceRate: 0.94,
          hiringDone: 3,
          resignations: 1,
        },
        {
          month: "September 2025",
          attendanceRate: 0.91,
          hiringDone: 2,
          resignations: 2,
        },
      ],
    },

    employees: [
      {
        id: 201,
        name: "Ali Raza",
        position: "Recruitment Officer",
        joinedOn: new Date("2021-06-15"),
        salary: 60000,
        leaves: [
          { month: "October", count: 2 },
          { month: "September", count: 3 },
        ],
        trainings: [
          { topic: "Conflict Management", date: new Date("2024-08-12") },
          { topic: "Communication Skills", date: new Date("2025-02-10") },
        ],
      },
      {
        id: 202,
        name: "Hina Malik",
        position: "HR Assistant",
        joinedOn: new Date("2022-02-01"),
        salary: 50000,
        leaves: [
          { month: "October", count: 4 },
          { month: "September", count: 1 },
        ],
        trainings: [
          { topic: "Excel for HR", date: new Date("2024-07-15") },
        ],
      },
    ],
  },

  // Development Department — deeply nested arrays & objects
  development: {
    teamLead: {
      id: 301,
      name: "Ahmed Saeed",
      position: "Full Stack Lead",
      joinedOn: new Date("2019-05-20"),
      salary: 160000,
      techStack: ["React", "Node.js", "TypeScript", "MongoDB"],
      mentoring: [
        { menteeId: 305, name: "Fahad", skillFocus: "React" },
        { menteeId: 306, name: "Iqra", skillFocus: "Node.js" },
      ],
    },

    teams: [
      {
        name: "Frontend Team",
        members: [
          {
            id: 302,
            name: "Zainab Aslam",
            role: "React Developer",
            joinedOn: new Date("2021-09-10"),
            salary: 130000,
            skills: ["HTML", "CSS", "React", "TailwindCSS"],
            projects: [
              {
                projectId: "P101",
                name: "Client Portal UI",
                deadlines: {
                  initial: new Date("2024-11-30"),
                  revised: new Date("2025-01-10"),
                },
                progress: 85,
                tasks: [
                  { task: "Build Login Page", done: true },
                  { task: "Implement Dark Mode", done: false },
                ],
              },
            ],
          },
          {
            id: 303,
            name: "Faisal Qureshi",
            role: "UI Designer",
            salary: 115000,
            joinedOn: new Date("2020-06-01"),
            skills: ["Figma", "Adobe XD", "CSS"],
            projects: [
              {
                projectId: "P102",
                name: "Internal Dashboard",
                deadlines: {
                  initial: new Date("2024-09-15"),
                  revised: new Date("2024-10-01"),
                },
                progress: 100,
                tasks: [
                  { task: "Design Mockups", done: true },
                  { task: "Handoff to Developers", done: true },
                ],
              },
            ],
          },
        ],
      },

      {
        name: "Backend Team",
        members: [
          {
            id: 304,
            name: "Usman Tariq",
            role: "Backend Developer",
            salary: 135000,
            joinedOn: new Date("2020-11-02"),
            skills: ["Node.js", "Express", "MongoDB"],
            projects: [
              {
                projectId: "P103",
                name: "API Gateway",
                deadlines: {
                  initial: new Date("2024-12-01"),
                  revised: new Date("2025-01-15"),
                },
                progress: 60,
                tasks: [
                  { task: "Authentication Middleware", done: true },
                  { task: "Rate Limiter", done: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // Admin Department — object with nested array of objects
  admin: {
    head: {
      id: 401,
      name: "Imran Abbas",
      joinedOn: new Date("2018-01-10"),
      salary: 100000,
      responsibilities: ["Office Maintenance", "Asset Management", "Budget"],
    },

    staff: [
      {
        id: 402,
        name: "Nimra Javed",
        role: "Office Assistant",
        joinedOn: new Date("2022-06-25"),
        salary: 45000,
        assetsHandled: [
          { asset: "Printers", count: 3 },
          { asset: "Laptops", count: 12 },
        ],
      },
      {
        id: 403,
        name: "Hassan Iqbal",
        role: "Security Officer",
        joinedOn: new Date("2019-08-14"),
        salary: 40000,
        shifts: [
          { day: "Monday", start: "09:00", end: "17:00" },
          { day: "Tuesday", start: "09:00", end: "17:00" },
        ],
      },
    ],
  },

  // Array of company projects (for cross-department collaboration)
  projects: [
    {
      id: "P101",
      name: "Client Portal UI",
      departmentsInvolved: ["Development", "HR"],
      startedOn: new Date("2024-06-01"),
      budget: 1200000,
      teamMembers: [
        { id: 302, name: "Zainab Aslam", role: "Frontend Dev" },
        { id: 201, name: "Ali Raza", role: "HR Recruiter" },
      ],
    },
    {
      id: "P104",
      name: "Payroll Automation",
      departmentsInvolved: ["Admin", "HR", "Development"],
      startedOn: new Date("2024-07-20"),
      budget: 800000,
      milestones: [
        {
          title: "Database Setup",
          dueDate: new Date("2024-08-15"),
          completed: true,
        },
        {
          title: "API Integration",
          dueDate: new Date("2024-10-05"),
          completed: false,
        },
      ],
    },
  ],
};


/*

Complex Query (Multiple Filters)
From all projects, get those:
where "Development" department is involved,
and where at least one milestone is incomplete,
and budget is greater than 500000.
*/




/*

Accessing Nested Data
Get the email (if available) or name of the HR manager.
Retrieve the city names of all software house offices.
Get the techStack used by the development team lead.
Display the progress of the project "Client Portal UI".

*/

 

function getData() {

  const { name } = softwareHouse.hr.manager;
  const city = softwareHouse.location.offices.map((office) => (office.city));
  const { techStack } = softwareHouse.development.teamLead;
  let progress;
  softwareHouse.development.teams.map((team) => (
    team.members.map((member) => (
      member.projects.map((project) => {
        progress = project;
      })
    ))
  ))

  console.log(name, city, techStack, progress);

}

getData();


/**
Array Iteration
Print the names of all Frontend Team members.
List all HR employees who joined after 2021.
From the Admin staff, get a list of all assets handled by "Nimra Javed".
Find how many employees are there in total (sum of HR, Development, and Admin staff).

 */

 

function arrayIteration(softwareHouse) {
  let frontendMembers = [];
  softwareHouse.projects.map((project) => (
    project.teamMembers?.filter((teamMember) => {
      if (teamMember.role === "Frontend Dev") {
        //  console.log(teamMember.name)
        frontendMembers.push(teamMember.name)
      }
    }
    ))
  )

  console.log(frontendMembers)



}

arrayIteration(softwareHouse)


function findHr() {
  let hr = softwareHouse.hr.manager.joinedOn;
  console.log(hr)
}
findHr()

// From the Admin staff, get a list of all assets handled by "Nimra Javed".
function assetsHandled() {
  let assets;
  softwareHouse.admin.staff.map((staff) => {
    if (staff.name === "Nimra Javed") {
      assets = staff.assetsHandled;
    }
  });

  console.log(assets)
}

assetsHandled()




// Find how many employees are there in total (sum of HR, Development, and Admin staff).

function getEmployees() {
  let hrEmployees = softwareHouse.hr.employees.length;

  let devEmployees = softwareHouse.development.teams.map(({ members }) => members).length;

  let adminEmployees = softwareHouse.admin.staff.length;

  console.log(hrEmployees + devEmployees + adminEmployees)


}

getEmployees()




/*

Array Filtering
Get all projects where the progress < 80.
Find all developers who know "React".
Filter HR employees who have taken more than 3 leaves in October.
*/

 

function projectsProgress(softwareHouse) {
  let projects = [];
  softwareHouse.development.teams.map((team) =>
    team.members.map((member) => (
      member.projects.map((project) => {
        if (project.progress < 80) {
          projects.push(project.name)
        }
      })
    ))
  );

  console.log(projects)
}

projectsProgress(softwareHouse)


// Find all developers who know "React".

function reactDevs(softwareHouse) {
  const teamLead = softwareHouse.development.teamLead.name;
  let teamDev = [];
  softwareHouse.development.teams.map((team) => {
    team.members.map((member) => teamDev.push(member.name));
  })


  console.log(teamLead, teamDev)
}

reactDevs(softwareHouse);


// Filter HR employees who have taken more than 3 leaves in October.

function hrEmployeesWithLeaves() {
  let hrs = []
  softwareHouse.hr.employees.map((emp) => {
    emp.leaves.filter((leave) => {
      if (leave.count > 3) {
        hrs.push(emp.name)
      }
    });
  });

  console.log(hrs)
}

hrEmployeesWithLeaves();


/**
 
Mapping
Create an array of all employee names with their salaries.
Map over all development team members and extract their project names.
Generate a list of cities with employeesCount from the offices array.
 */

 

function allEmployees(softwareHouse) {
  let allEmployees = [];
  {
    const { name, salary } = softwareHouse.hr.manager;
    allEmployees.push({ name, salary });
  }
  softwareHouse.hr.employees.map(({ name, salary }) => {
    allEmployees.push({ name, salary });
  });

  {
    const { name, salary } = softwareHouse.development.teamLead;
    allEmployees.push({ name, salary })
  }

  softwareHouse.development.teams.map((team) => {
    team.members.map(({ name, salary }) => {
      allEmployees.push({ name, salary });
    })
  });

  {
    const { name, salary } = softwareHouse.admin.head;
    allEmployees.push({ name, salary });
  }
  softwareHouse.admin.staff.map(({ name, salary }) => {
    allEmployees.push({ name, salary })
  });

}

allEmployees(softwareHouse);



// Map over all development team members and extract their project names.

function developmentTeam(softwareHouse) {
  let pro = [];
  softwareHouse.development.teams.map((team) => {
    team.members.map(({ name, projects }) => {
      let projectName;
      projects.map((project) => {
        projectName = project.name;
        console.log(name, project.name);

        pro.push({ name, projectName: project.name });
      })

    })
  })

  console.log(pro)
}

developmentTeam(softwareHouse);


// Generate a list of cities with employeesCount from the offices array.

function employeesCity(softwareHouse) {
  let employess = []
  softwareHouse.location.offices.map(({ city, employeesCount }) => {
    employess.push({ city, employeesCount })
  })
  console.log(employess)

}

employeesCity(softwareHouse)


/**
 
Object Traversal
Get all keys of the development.teamLead object.
Get all department names using Object.keys().
 */


function keysOfTeamLead(softwareHouse) {
  let keys = Object.keys(softwareHouse.development.teamLead);

  console.log(keys);
}

keysOfTeamLead(softwareHouse);

function departmentNames() {
  let keys = (Object.keys(softwareHouse));
  console.log(keys);
  let ans = keys.filter((key) => {
    if (key === 'hr' || key === 'development' || key === 'admin') {
      return key;
    }
  })
  console.log(ans)
}

departmentNames()


/*

Conditional Access
Check if "Payroll Automation" project includes "HR" in departmentsInvolved.
Check whether any developer has completed all project tasks (all done: true).

*/

 

function checkHR(softwareHouse) {
  softwareHouse.projects.map((project) => {
    //console.log(project)
    if (project.name === "Payroll Automation") {
      let ans = project.departmentsInvolved.some((dep) => dep === "HR");
      console.log(ans)
    }
  })
}

checkHR(softwareHouse)


function checkDeveloperTask(softwareHouse) {
  softwareHouse.development.teams.map((team) => {
    team.members.map((member) => {
      // console.log(member.projects)
      member.projects.map((project) => {
        let ans = project.tasks.every((task) => task === true);
        console.log(ans)
      })
    })
  })
}

checkDeveloperTask(softwareHouse)


/*

Nested Loops & Conditionals
Get a list of all unique skills across all developers (Frontend + Backend).
Calculate the total progress average of all development projects.
Count how many projects are still ongoing (progress < 100).

*/

 


function uniqueSkills(softwareHouse) {

  let skil = []
  softwareHouse.development.teams.map((team) => {
    team.members.map((mem) => {
      mem.skills.forEach((skill) => {
        console.log(skill)
        skil.push(skill);
      })
    })
  })
  console.log(skil)
}

uniqueSkills(softwareHouse);


// calculate the total progress average of all development projects.

function progressAverage() {
  let totalArr = [];
  softwareHouse.development.teams.map((team) => {
    team.members.map((mem) => {
      mem.projects.map((project) => {
        totalArr.push(project.progress)
      })
    })
  })
  const total = totalArr.reduce((a, b) => a + b, 0);
  console.log(total / totalArr.length)
}

progressAverage();


// Count how many projects are still ongoing (progress < 100).

function pendingProgress() {
  softwareHouse.development.teams.map((team) => {
    team.members.map((member) => {
      // console.log(member.projects)
      member.projects.map((project) => {
        if (project.progress < 100) {
          console.log(project.name)

        }
      })
    })
  })
}

pendingProgress()

/*

Combining Arrays
Merge all HR, Development, and Admin employees into one unified array with a new key department.
After merging, sort the array by salary (descending).

*/

 

function mergeAllHRs(softwareHouse) {
  let allEmployees = [];
  softwareHouse.hr.employees.forEach((emp) => allEmployees.push(emp));
  softwareHouse.development.teams.forEach((team) =>
    team.members.forEach((emp) => allEmployees.push(emp))
  );
  softwareHouse.admin.staff.forEach((staff) => allEmployees.push(staff))



  console.log(allEmployees)
}

mergeAllHRs(softwareHouse)

function sortAllEmployess(softwareHouse) {
  let allEmployees = [];
  softwareHouse.hr.employees.forEach((emp) => allEmployees.push(emp));
  softwareHouse.development.teams.forEach((team) =>
    team.members.forEach((emp) => allEmployees.push(emp))
  );
  softwareHouse.admin.staff.forEach((staff) => allEmployees.push(staff));

  const sorted = allEmployees.sort((a, b) => b.salary - a.salary);
  console.log(sorted)
}

sortAllEmployess(softwareHouse)


/**
 
Advanced Filtering
From the merged list above, filter employees who joined after 2020 and earn above 100000.
Find employees who have attended at least one training before 2024-12-31.

 */


/*
Using Reduce
Calculate the total payroll of the entire company using .reduce().
Compute the total number of assets the admin team manages.
Use reduce to find the average progress of all development projects.
*/

 

function totalPayroll(softwareHouse) {
  let hrManagerSalary = softwareHouse.hr.manager.salary;

  let hrEmployees = softwareHouse.hr.employees.map(({ salary }) => salary);

  let othersHrEmployeessSalary = hrEmployees.reduce((a, b) => a + b, 0);


  console.log(hrManagerSalary + othersHrEmployeessSalary);

  let teamLeadSalary = softwareHouse.development.teamLead.salary;

  let totalDevSalary = [];
  softwareHouse.development.teams.map((team) => {
    totalDevSalary = team.members.map(({ salary }) => salary).reduce((a, b) => a + b, 0);
  });

  console.log(totalDevSalary + teamLeadSalary);

  let adminHeadSalary = softwareHouse.admin.head.salary;


  let adminEmployeeSalary = softwareHouse.admin.staff.map(({ salary }) => salary).reduce((a, b) => a + b, 0);

  console.log(adminHeadSalary + adminEmployeeSalary + totalDevSalary + teamLeadSalary + hrManagerSalary + othersHrEmployeessSalary);

}

totalPayroll(softwareHouse)


// Use reduce to find the average progress of all development projects.
function totalAssestManagedByAdmin(softwareHouse) {
  let totalAssetsData = []
  softwareHouse.admin.staff.forEach((staff) => {
    staff.assetsHandled?.map(({ count }) => totalAssetsData.push(count));
  });
  const totalAssets = totalAssetsData.reduce((a, b) => a + b, 0)
  console.log(totalAssets);
}

totalAssestManagedByAdmin(softwareHouse);


// Use reduce to find the average progress of all development projects.

function avergageofDevelopmentproject() {
  softwareHouse.projects.map((project) => console.log(project) )
}



/*

Destructuring & Optional Chaining
Use destructuring to extract name and salary of the teamLead.
Use optional chaining to safely access the second milestone’s due date of "Payroll Automation".

*/

 

// Use destructuring to extract name and salary of the teamLead.
const { name, salary } = softwareHouse.development.teamLead;
console.log(name, salary);

//  Use optional chaining to safely access the second milestone’s due date of "Payroll Automation".
softwareHouse.projects.map((project) => project.milestones?.map((milestone) => console.log(milestone.dueDate)));



/*
Date Comparison
Find all projects whose revised deadline is after 2025-01-01.
List employees whose training dates are in 2025.
*/

 


// Find all projects whose revised deadline is after 2025-01-01.
function revisedDeadline(softwareHouse) {
  let newDate = new Date('2025-01-01');
  softwareHouse.development.teams.map((team) =>
    team.members.map((member) => {
      member.projects.map((project) => {
        if (project.deadlines.revised > newDate) {
          console.log(project.name)
        }
      })
    })
  )
}


revisedDeadline(softwareHouse);

// List employees whose training dates are in 2025.

function trainingDates(softwareHouse) {
  let newDate = new Date('2024-12-31')
  softwareHouse.hr.employees.map((employee) => {
    employee.trainings.map((training) => {
      if (training.date > newDate) {
        console.log(employee.name)
      }
    })
  })
}

trainingDates(softwareHouse)





/*

Nested Data Aggregation
Count how many tasks (total) are marked as done: false in all projects.
Find the total number of mentees under the team lead.
*/

 

function totalTasks(softwareHouse) {
  let total = 0;
  console.log(total)
  softwareHouse.development.teams.map((team) =>
    team.members.map((member) => {
      member.projects.map((project) => {
        project.tasks.map((task) => {
          // console.log(task)
          if (task.done == false) {
            console.log(task)
            total++;
          }
        })
      })
    })
  )
  console.log(total)
}

totalTasks(softwareHouse);

function totalMentee(softwareHouse) {
  const totalMentees = softwareHouse.development.teamLead.mentoring.length;
  console.log(totalMentees)
}
totalMentee(softwareHouse)



/*

Complex Query (Multiple Filters)
From all projects, get those:
where "Development" department is involved,
and where at least one milestone is incomplete,
and budget is greater than 500000.

*/

 

function getDevelopment() {
  softwareHouse.projects.map((project) => {
    project.departmentsInvolved.map((department) => {
      if (department === "Development") {
        console.log(department)
      }
    })
  })
}

getDevelopment()




/*
Deep Copy
Clone the softwareHouse object without keeping reference to the original one.
*/

const deepCopy = JSON.stringify(JSON.parse(softwareHouse));
console.log(deepCopy)