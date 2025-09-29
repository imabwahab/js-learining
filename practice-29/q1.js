// import { softwareHouse } from "./data";

import { softwareHouse } from "./data.js";

// Find all pending items (subtasks, features, modules, milestones) across the entire dataset.

// Expected Output Example:
// [
//   { type: "subtask", title: "Implement API Integration" },
//   { type: "feature", title: "Stripe Integration" },
//   { type: "milestone", title: "MVP Release" }
// ]



function pendingTasks(softwareHouse) {
  const pendingTasks = [];
  softwareHouse.location.offices.forEach((office) => {
    // console.log(office)
    office.departments.forEach((dept) => {
      dept.teams?.forEach((team) => {
        team.members?.forEach((member) => {
          member.projects?.forEach((project) => {
            project.tasks?.forEach((task) => {
              if (task.status !== "Completed") {
                // console.log(task)
                pendingTasks.push({ type: "task", title: task.title });
              }
            });

            project.modules?.forEach((module) => {
              if (module.status !== "Completed") {
                // console.log(module)
                pendingTasks.push({ type: "module", title: module.module });
              }
            })
          });
        })
      })
    });
  });

  softwareHouse.clients.forEach((client) => {
    client.projects?.forEach((project) => {
      project.milestones?.forEach((milestone) => {
        if (milestone.status !== "Completed") {
          pendingTasks.push({ type: "milestone", title: milestone.title })
        }
      })
    })
  })

  console.log(pendingTasks);
}

pendingTasks(softwareHouse);


function pendingTasks2(softwareHouse) {
  const officePending = softwareHouse.location.offices.flatMap((office) =>
    office.departments?.flatMap((dept) =>
      dept.teams?.flatMap((team) =>
        team.members?.flatMap((member) =>
          member.projects?.flatMap((project) => [
            // Collect tasks
            ...(project.tasks?.filter(task => task.status !== "Completed")
              .map(task => ({ type: "task", title: task.title })) || []),
            // Collect modules
            ...(project.modules?.filter(module => module.status !== "Completed")
              .map(module => ({ type: "module", title: module.module })) || [])
          ]) || []
        ) || []
      ) || []
    ) || []
  );


  // 2. Pending milestones (from clients' projects)
  const clientPending = softwareHouse.clients.flatMap((client) =>
    client.projects?.flatMap((project) =>
      project.milestones?.filter(m => m.status !== "Completed")
        .map(m => ({ type: "milestone", title: m.title })) || []
    ) || []
  );

  return [...officePending, ...clientPending];

}

console.log(pendingTasks2(softwareHouse))