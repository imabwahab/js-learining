// Write an async function that fetches user data (dummy data).

async function fetchData() {
  const response = await fetch(' https://jsonplaceholder.typicode.com/todos/1');
  const data =await response.json();
  console.log(data);
}

fetchData();