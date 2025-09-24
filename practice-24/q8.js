// Write a function fetchDataWithError() that tries to fetch from a wrong URL.

async function fetchDataWithError() {
  try {
    const res = await fetch(`https://dummyjson.com/posts/us`);
    if (!res.ok) {
      throw new Error(`failed to fetch`);
    }
    const data = await res.json();
    console.log(data)

  } catch (error) {
    console.log(error)
  }
}


fetchDataWithError();