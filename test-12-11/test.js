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
Find all projects where all tasks are marked done: true. Return project names only.
*/

function allTasksDone(softwareHouse) {
  return softwareHouse.development.teams
    .flatMap((team) => team?.members)
    .flatMap((member) => member.projects)
    .filter((project) => project.tasks.every(task => task.done))
    .map((project) => project.name)
}

console.log(allTasksDone(softwareHouse))


// Filter HR employees who have taken more than 2 leaves in December and earn above 80k.

function hrOnLeave(softwareHouse) {
  return softwareHouse.hr.employees.filter((e) => e.salary > 80000 && e.leaves.some((l) => l.month === 'December' && l.count > 2))
    .map((e) => e.name)
}

console.log(hrOnLeave(softwareHouse))



// Calculate the average salary of employees who joined after 2020.


function totalPayroll(softwareHouse) {

  let newDate = new Date('2020-12-31');
  let salaries = [];

  if (softwareHouse.hr.manager.joinedOn > newDate) {
    salaries.push(softwareHouse.hr.manager.salary);
  }
  softwareHouse.hr.employees.map(({ joinedOn, salary }) => {
    if (joinedOn > newDate) {
      salaries.push(salary);
    }
  });

  if (softwareHouse.development.teamLead.joinedOn > newDate) {
    salaries.push(softwareHouse.development.teamLead.salary);
  }



  softwareHouse.development.teams.flatMap(({ members }) => members).map((team) => {
    if (team.joinedOn > newDate) {
      salaries.push(team.salary);
    }
  });


  if (softwareHouse.admin.head.joinedOn > newDate) {
    salaries.push(softwareHouse.admin.head.salary);
  }

  softwareHouse.admin.staff.map(({ joinedOn, salary }) => {
    if (joinedOn > newDate) {
      salaries.push(salary);
    }
  })

  const totalSalary = salaries.reduce((a, b) => a + b, 0)

  console.log('Average salary : ', totalSalary / salaries.length)
}

totalPayroll(softwareHouse)


// Compute total budget of all projects where “Development” is involved using reduce.

function totalBudget(softwareHouse) {
  return softwareHouse.projects.filter(p => p.departmentsInvolved.includes("Development"))
    .reduce((sum, p) => sum + p.budget, 0)
}
console.log(totalBudget(softwareHouse));


// From all employees, get those who have at least one skill in ["React", "Node.js"] and joined before 2022.


function employeeMatchSkill(softwareHouse) {
  const newDate = new Date('2022-01-01');
  return softwareHouse.development.teams
    .flatMap(t => t.members)
    .filter(m => m.joinedOn < newDate && m.skills.some(s => ["React", "Node.js"].includes(s)))
    .map(m => m.name);
}


console.log(employeeMatchSkill(softwareHouse));

// Dynamic Path & Deep Copy

// Write getValueByPath(obj, path) that retrieves any nested value dynamically.

function getValueByPath(obj, path) {

  const keys = path.split('.');
  let result = obj;
  // console.log(keys);
  //console.log(result)
  for (const key of keys) {
    if (result === null || !(key in result)) {
      return undefined;
    }
    result = result[key];
    // console.log(result);
  }

  return result;
}

console.log(getValueByPath(softwareHouse, 'location.country'))



// Deep copy the entire softwareHouse object and update a nested project progress without modifying the original.

let deepCopy = structuredClone(softwareHouse);
deepCopy.name = "Algotix AI";
deepCopy.development.teamLead.name = "Ali Asghar";

function updatedObject(obj) {
  return {
    ...obj,
    development: {
      ...obj.development,
      teams: obj.development.teams.map((team) => ({
        ...team,
        members: team.members.map((member) => ({
          ...member,
          projects: member.projects.map((project) => ({
            ...project,
            progress: project.progress + 5, // only update progress
          })),
        })),
      })),
    },
  };
}

const updatedCopy = updatedObject(deepCopy);

console.log(updatedCopy.development.teams[0].members[0].projects[0].progress); // 90 
console.log(deepCopy.development.teams[0].members[0].projects[0].progress);   // 85  unchanged
console.log(softwareHouse.development.teams[0].members[0].projects[0].progress); // 85 unchanged



// Write getEmployeeById(id) that returns the employee object from merged HR + Dev + Admin array.

function getEmployeeById(ID = 101) {
  const allEmployees = [];
  allEmployees.push(softwareHouse.hr.manager);
  allEmployees.push(...softwareHouse.hr.employees);
  allEmployees.push(softwareHouse.development.teamLead);
  allEmployees.push(...softwareHouse.development.teams.flatMap(t => t.members));
  allEmployees.push(softwareHouse.admin.head);
  allEmployees.push(softwareHouse.admin.staff);

  return allEmployees.find((emp) => emp.id === ID)
}

console.log(getEmployeeById(302));



// Write getDepartmentSalary(departmentName) returning the total salary of that department.

function getDepartmentSalary(departmentName = 'development') {
  let salaries = [];
  if (departmentName === 'hr') {
    salaries.push(softwareHouse.hr.manager.salary);
    softwareHouse.hr.employees.map(({ salary }) => {
      salaries.push(salary);
    });
  } else if (departmentName === 'development') {
    salaries.push(softwareHouse.development.teamLead.salary);
    softwareHouse.development.teams.flatMap(({ members }) => members).map((team) => {
      salaries.push(team.salary);
    });

  } else if (departmentName === 'admin') {
    salaries.push(softwareHouse.admin.head.salary);
    softwareHouse.admin.staff.map(({ salary }) => {
      salaries.push(salary);
    })
  }
  else {
    console.log(`${departmentName} not found.`)
  }

  console.log(salaries)
  let total = salaries.reduce((a, b) => a + b, 0);
  console.log(`${departmentName} total salaries`, total)
}

getDepartmentSalary('hr');




// Safely access the due date of the third milestone of the "Payroll Automation" project.

function thirdMilestone(softwareHouse) {
  softwareHouse.projects?.filter((project) => {
    if (project.name === "Payroll Automation") {
      return project
    }
  }).flatMap(({ milestones }) => milestones)?.map((milestone, i) => {
    if (i === 3) {
      console.log('3rd milestone', milestone?.dueDate)
    } else {
      console.log(`${i + 1} milestone`, milestone?.dueDate)
    }
  })
}

thirdMilestone(softwareHouse);




// Calculate how many days are left for all project revised deadlines.


function totalDaysbeforeDeadLine(softwareHouse) {
  const today = new Date();
  return softwareHouse.development.teams
    .flatMap(({ members }) => members)
    .flatMap(({ projects }) => projects)
    .map((project) => ({
      name: project.name,
      daysLeft: Math.ceil((project.deadlines.revised - today) / (1000 * 60 * 60 * 24))
    }))
}

console.log(totalDaysbeforeDeadLine(softwareHouse))


