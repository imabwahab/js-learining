const todoForm = document.forms.todoInput;
const todos = document.getElementById('todos');

// Helper function: safely parse JSON
function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem('todoTasks')) || [];
  } catch (e) {
    console.warn("Invalid JSON in localStorage. Resetting...");
    localStorage.removeItem('todoTasks'); // clear corrupted data
    return [];
  }
}

let todoTasks = loadTasks();

// Function to render all tasks
function renderTasks() {
  // Clear the current task list
  todos.innerHTML = '';

  // Render all tasks stored in todoTasks
  todoTasks.forEach((task, index) => {
    let div = document.createElement('div');
    div.classList.add("todo-item");
    div.innerHTML = `
      <span>${task.task}</span> 
      <span>${task.date}</span> 
      <button class="delete-btn">delete</button>
    `;
    todos.appendChild(div);

    // Add delete button functionality
    const deleteBtn = div.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      todoTasks.splice(index, 1);  // Remove task from array
      localStorage.setItem('todoTasks', JSON.stringify(todoTasks)); // Update storage
      renderTasks(); // Re-render tasks
    });
  });
}

// Initially render tasks from localStorage
renderTasks();

// Add new task
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTask = {
    task: todoForm.task.value.trim(),
    date: todoForm.date.value
  };

  if (!newTask.task) return; // don’t add empty todos

  todoTasks.push(newTask);

  // Save to localStorage
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));

  // Render updated tasks
  renderTasks();

  // Clear the form
  todoForm.reset();
});
