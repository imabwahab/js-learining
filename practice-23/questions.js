const companyData = {
  companyId: "C001",
  name: "TechNova",
  founded: 2010,
  employees: [
    {
      id: "E001",
      name: "Sarah Khan",
      role: "Frontend Developer",
      skills: ["JavaScript", "React", "CSS"],
      projects: [
        { projectId: "P001", name: "Website Redesign", status: "Completed" },
        { projectId: "P002", name: "Mobile App", status: "In Progress" }
      ],
      contact: { email: "sarah@technova.com", phone: "111-222-333" }
    },
    {

      id: "E002",
      name: "Ali Raza",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB"],
      projects: [
        { projectId: "P003", name: "API Development", status: "Completed" }
      ],
      contact: { email: "ali@technova.com", phone: "222-333-444" }
    },
    {
      id: "E003",
      name: "John Smith",
      role: "Full Stack Developer",
      skills: ["JavaScript", "Node.js", "React", "SQL"],
      projects: [
        { projectId: "P004", name: "E-Commerce Platform", status: "In Progress" },
        { projectId: "P005", name: "Chat App", status: "Completed" }
      ],
      contact: { email: "john@technova.com", phone: "333-444-555" }
    }
  ],
  departments: [
    { deptId: "D001", name: "Frontend", head: "Sarah Khan" },
    { deptId: "D002", name: "Backend", head: "Ali Raza" }
  ]
};


// Get Employee Skills
// Write a function that returns all unique skills of employee.

function uniqueSkills(companyData) {
  let uniqueSkills = new Set();
  companyData.employees.forEach((emp) => {
    emp.skills.forEach(skill => {
      uniqueSkills.add(skill)
    });
  });
  return [...uniqueSkills];
}

console.log(uniqueSkills(companyData));


// completed projects count
// count the total number of completed projects across all employees.
function countCompletedProjects(companyData) {
  let countProjects = 0;
  companyData.employees.forEach((emp) => {
    //console.log(emp)
    emp.projects.forEach(project => {
      if (project.status === "Completed") {
        countProjects++;
      }
    })
  })
  return countProjects;
}

console.log(countCompletedProjects(companyData))


// find Employees by Role
// Return names of employees with the role "Frontend Developer"

function findEmployees(role) {
  let employee = companyData.employees
    .filter(emp => emp.role === role)
    .map(emp => emp.name);
  return employee;
}

console.log(findEmployees("Frontend Developer"));

// Contact Summary
// Create an object that maps employee names to their email & phone.

function mapEmployeeData(companyData) {
  let res = companyData.employees.reduce((acc, emp) => {
    acc[emp.name] = {
      email: emp.contact.email,
      phone: emp.contact.phone
    };
    return acc;
  }, {});

  console.log(res);
}

mapEmployeeData(companyData);



// Project Status Report
// Return an array of objects:

// [{ employee: "Sarah Khan", project: "Website Redesign", status: "Completed" }, ...]


function projectStatus() {
  let result = companyData.employees.flatMap(emp => {
    return emp.projects.map(project => ({
      employee: emp.name,
      project: project.name,
      status: project.status
    }))
  })
  console.log(result)
}

projectStatus();

