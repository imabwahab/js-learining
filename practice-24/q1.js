// Write a function that fetches all posts from https://jsonplaceholder.typicode.com/posts and logs the first 5 post titles.

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await response.json();
  data = data.filter(post => post.id <= 5);
  console.log(data);
}
fetchPosts();