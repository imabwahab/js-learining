// Fetch all users and return an array of objects:

// [{ name: "Leanne Graham", city: "Gwenborough" }, ...]

async function fetchUsers() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await response.json();
  // console.log(data)
  data = data.map(data => {
    return { name: data.name, city: data.address.city }
  })
  console.log(data);
}
fetchUsers()