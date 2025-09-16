let form = document.forms.todoList;

const todoTasks = JSON.parse(localStorage.getItem('todos')) || [];

let task = {
  task: "",
  date: ""
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  console.log("Task:", form.todo.value);
  console.log("Date:", form.date.value);

   task = {
    task: form.todo.value,
    date: form.date.value
  };
  console.log(task);

  todoTasks.push(task);

  localStorage.setItem('todos', JSON.stringify(todoTasks));
});

const ul = document.getElementById('todoItems');

todoTasks.forEach((task) => {
  let li = document.createElement('li');
  li.innerText = `${task.task} - ${task.date} `;
  ul.appendChild(li);
});
