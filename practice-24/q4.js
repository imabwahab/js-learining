// Fetch data from https://jsonplaceholder.typicode.com/todos and return all completed todos.


async function fetchTodos() {
  let response  = await fetch('https://jsonplaceholder.typicode.com/todos')
  let data = await response.json();
  data = data.filter(todo => todo.completed === true)
  console.log(data);
}


fetchTodos()





























































// let date1 = new Date("2024-09-15");
// console.log(date1)
// let date2 = new Date("2024-09-22");
// console.log(date2);
// let diff;
// Math.ceil(diff = date2 - date1);
// console.log(diff / (1000 * 24 * 60 * 60));