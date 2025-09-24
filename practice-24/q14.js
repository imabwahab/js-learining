// Chain multiple .then() calls after fetching posts:
// - first log total posts
// - Then log only post IDs
// - finally return the first post.

function fetchPosts() {
  fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      console.log(data.posts.length);
      return data.posts;
    })
    .then(posts => {
      console.log("Post IDs:", posts.map(post => post.id));
      return posts[0];
    })
    .then(firstPost => {
      console.log("First Post:", firstPost)
    })
    .catch(error => console.error("Error:", error))
}

fetchPosts();