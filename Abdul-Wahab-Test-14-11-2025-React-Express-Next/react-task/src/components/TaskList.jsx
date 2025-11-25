import React, { useState, useMemo } from 'react'

const TaskList = ({ data }) => {


  const tasks = data.company.projects
    .flatMap((project) => project.tasks)
    .filter((task) => task.assignedTo === "Abdul Wahab");

  console.log(tasks);

  const [filter, setFilter] = useState(false);

  const filteredData = useMemo(() => {
    if (!filter) {
      return tasks
    }
    return tasks.filter((task) => filter && task.status === "in-progress")
  }, [filter])
  return (
    <div className='bg-gray-800 text-white flex flex-col gap-4 items-center justify-center py-8'>

      {filteredData.map((task) => (
        <p className='bg-blue-600 py-1 px-4 rounded'>{task.task} - {task.assignedTo} - {task.status}</p>
      ))}

      <button
        onClick={() => setFilter(!filter)}
        className='bg-red-400 px-4 py-2 rounded'>in-progress</button>
    </div>
  )
}

export default TaskList