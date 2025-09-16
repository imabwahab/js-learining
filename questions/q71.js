// Demonstrate callbacks with a simple async operation.

function fetchData(callback) {
  console.log('Fetching data...');

  setTimeout(() => {
    const data = { id: 1, name: "Abdul Wahab" };
    console.log('Data fetched.');
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log("Displaying data:", data);
}

// Call fetchData and pass displayData as a callback
fetchData(displayData);