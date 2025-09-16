// Create a function that formats today's date as DD-MM-YYYY.

function formatTodayDate() {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return `${day}-${month}-${year}`;
}

console.log(formatTodayDate());