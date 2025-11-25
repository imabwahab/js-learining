Intern Test – @Abdul Wahab
Lead: Mr. Ali
 Stack: MERN
 Languages: JavaScript, Python, TypeScript
 Frameworks: NextJS Complete, React Complete, Express Mid
 Experience: 2 months 5 days
 Projects Completed: 3
1. Dataset (JSON)

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


2. Test Questions – Abdul Wahab
A. JavaScript / TypeScript Knowledge
Print all tasks assigned to Abdul Wahab across all projects.
Count how many tasks are completed for Abdul Wahab.
Get the status of the “Admin Dashboard” project.
B. React / NextJS Skills
Create a React functional component TaskList that displays all tasks for Abdul Wahab.
Add a filter button that shows only in-progress tasks.
Create a Next.js dynamic page pages/projects/[id].tsx that shows project details based on the id route parameter.
C. Express / Backend Skills
Implement an Express route GET /tasks/:memberName that returns all tasks for a team member.
Add error handling to return 404 if the member is not found.
D. TypeScript Skills
Define TypeScript interfaces for Task and Project.
Type the props of TaskList component using these interfaces.
E. Debugging / Error Handling
Fix the issue in this snippet and explain the mistake:

const project = projects.find(p => p.name = "Client Portal UI");
console.log(project.status);
Explain why the original code might behave unexpectedly.
F. Optional – Small Real-World Task
Implement a mini MERN feature:
Express route /projects → returns all projects
Next.js page /projects/[id] → fetches project info from Express API
Proper error handling for invalid project IDs