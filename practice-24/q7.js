// Fetch posts for a user (userId = 1) using async/await and return the titles only.

async function fetchPosts(userId) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/user/${userId}`);

    let data = await res.json();

    data = data.posts.map(post => post.title)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}


fetchPosts(2);