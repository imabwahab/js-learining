// Create an async function taht fetches two different users and logs their names one after another.

async function fetchTwoUsers(userId1, userId2) {
  try {
    const res1 = await fetch(`https://dummyjson.com/users/${userId1}`);
    const user1 = await res1.json();
    console.log(`First User: ${user1.firstName} ${user1.lastName}`);

    const res2 = await fetch(`https://dummyjson.com/users/${userId2}`);
    const user2 = await res2.json();
    console.log(`First User: ${user2.firstName} ${user2.lastName}`);
  } catch (error) {
    console.log(error)
  }
}

fetchTwoUsers(1, 2);