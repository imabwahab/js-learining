const data = JSON.parse(JSON.stringify(
  {
    "company": {
      "name": "TechVerse Solutions",
      "teams": {
        "frontend": [
          {
            "lead": "Ali",
            "members": [
              { "name": "Abdul Wahab", "role": "Frontend Developer", "tasks": ["React Components", "NextJS Pages", "API Integration"], "completedProjects": 3 },
              { "name": "Nadir Khan", "role": "Frontend Developer", "tasks": ["React Components", "NextJS Pages"], "completedProjects": 3 }
            ]
          }
        ],
        "backend": [
          {
            "lead": "Ali",
            "members": [
              { "name": "Muhammad Ahmed", "role": "Backend Developer", "tasks": ["FastAPI endpoints"], "completedProjects": 2 }
            ]
          }
        ]
      },
      "projects": [
        {
          "id": 501,
          "name": "Client Portal UI",
          "status": "in-progress",
          "team": "Frontend",
          "tasks": [
            { "task": "Login Screen", "assignedTo": "Abdul Wahab", "status": "completed" },
            { "task": "Dashboard Page", "assignedTo": "Abdul Wahab", "status": "in-progress" }
          ]
        },
        {
          "id": 502,
          "name": "Internal HR Portal",
          "status": "completed",
          "team": "Frontend",
          "tasks": [
            { "task": "Employee Table", "assignedTo": "Abdul Wahab", "status": "completed" },
            { "task": "Filters & Sorting", "assignedTo": "Nadir Khan", "status": "completed" }
          ]
        },
        {
          "id": 503,
          "name": "Admin Dashboard",
          "status": "in-progress",
          "team": "Frontend",
          "tasks": [
            { "task": "Sidebar Navigation", "assignedTo": "Abdul Wahab", "status": "in-progress" },
            { "task": "Analytics Widgets", "assignedTo": "Nadir Khan", "status": "pending" }
          ]
        }
      ]
    }
  }
))

console.log(data);




/**
A. JavaScript / TypeScript Knowledge
Print all tasks assigned to Abdul Wahab across all projects.
Count how many tasks are completed for Abdul Wahab.
Get the status of the “Admin Dashboard” project.
 */

// Print all tasks assigned to Abdul Wahab across all projects.
function printAllTasks(data) {
  data.company.projects.forEach((project) => {
    // console.log(project)
    project.tasks.forEach((task) => {
      // console.log(task)
      if (task.assignedTo === "Abdul Wahab") {
        console.log(task)
      }
    })
  })
}

printAllTasks(data)


// Count how many tasks are completed for Abdul Wahab.
function completedTasks(data) {
  const tasks = data.company.projects
    .flatMap((project) => project.tasks)
    .filter((task) => task.assignedTo === "Abdul Wahab" && task.status === 'completed')
  console.log(tasks.length)
}

completedTasks(data)


// Get the status of the “Admin Dashboard” project.

function adminDashboardStatud(data) {
  const status = data.company.projects
    .filter((project) => project.name === "Admin Dashboard").map((project) => project.status)

  console.log(status)
}

adminDashboardStatud(data);






/**
 * E. Debugging / Error Handling
Fix the issue in this snippet and explain the mistake:

const project = projects.find(p => p.name = "Client Portal UII");
console.log(project.status);
Explain why the original code might behave unexpectedly.


 */

// in this code we are not comparing a value with the name of every project, but instead we are assigning a value to the project name which will then compare it with the first one and returns true or object, even if we don't have that name in the projects it will return the project with the rename of the first project.


const project = data.company.projects
  .find((project) => project.name = "Client Portal UII")

console.log(project)