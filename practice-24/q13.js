// Write a function taht retries fetching from an API up to 2 times if it fails.


async function fetchWithRetry(url, retries = 3) {
  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`)
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.warn(`Attempt ${attempt} failed: ${error.message}`)
    }
    if (attempt > retries) {
      throw new Error("All retries failed.")
    }
  }
}


fetchWithRetry("https://dummyjson.com/uses")
.then(data => console.log("Fetched successfully: ", data))
.catch(err => console.log(err.message))