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
