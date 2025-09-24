// Write a function using Promise.allSettled that fetches two APIs (one valid, one invalid). Log whether each was "fulfilled" or "rejected".


// Write a function using Promise.allSettled that fetches two APIs.
// (one valid, one invalid). Log whether each was "fulfilled" or "rejected".

async function fetchWithAllSettled() {
  const urls = [
    "https://dummyjson.com/users", // ✅ valid API
    "https://dummyjson.com/invalid"  // ❌ invalid API
  ];

  const results = await Promise.allSettled(
    urls.map(url => fetch(url).then(res => res.json()))
  );

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`API ${index + 1} -> fulfilled ✅`);
      console.log(result.value); // you can log data if needed
    }
    else {
      console.log(`API ${index + 1} -> Rejected ❌`);
      console.log(result.reason); // logs the error
    }
  })
}


fetchWithAllSettled();