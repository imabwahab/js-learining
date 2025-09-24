
// Write a function that fetches comments for a post (id = 1) from https://jsonplaceholder.typicode.com/posts/1/comments and returns an array of emails.

async function fetchComments(postId) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  let data = await response.json();
  console.log(data)
  return data.map(comment => comment.email);
}

(async () => {
  console.log(await fetchComments(2))
})()