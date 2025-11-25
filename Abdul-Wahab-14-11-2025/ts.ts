
/**
 * D. TypeScript Skills
Define TypeScript interfaces for Task and Project.
Type the props of TaskList component using these interfaces.
 */



interface Task {
  task: string,
  assignedTo: string,
  status: string
}



interface Project {
  id: number,
  name: string,
  status: string,
  team: string,
  tasks: Task[]
}