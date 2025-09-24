// Fetch todos and return only those with the title length > 20 characters.

async function fetchspecificTodos() {
  try {
    const res = await fetch('https://dummyjson.com/todos');
    const data = await res.json();
    console.log(data.todos);
    const filteredTodos = data.todos.filter(todo => todo.todo.length>20 && todo.completed ===true )
    console.log(filteredTodos)
  } catch (error) {
    console.log(error)
  }
}

fetchspecificTodos()