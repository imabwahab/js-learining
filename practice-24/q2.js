// Fetch a user by ID (https://jsonplaceholder.typicode.com/users/1) and log their name and email.

const fetchData = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  let data = await response.json();
  console.log(`Name : ${data.name} - Email : ${data.email}`)
}

fetchData()