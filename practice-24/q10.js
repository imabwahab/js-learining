/*
Create an async function that fetches 3 APIs in parallel using Promise.all:

Users

Posts

Comments
Return an object with counts:

{ users: 10, posts: 100, comments: 500 }
*/


async function fetchCounts() {
  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments")
    ]);

    const [users, posts, comments] = await Promise.all([
      usersRes.json(),
      postsRes.json(),
      commentsRes.json(),
    ]);

    console.log(users, posts, comments)
    return {
      users: users.length,
      posts: posts.length,
      comments: comments.length
    };
  } catch (error) {

  }
}

(async (params) => {
  fetchCounts().then(result => console.log(result))
})()