import { softwareCompany } from "./data.js";

// Q6. Using reduce(), calculate the total company revenue across all years from revenue.yearly.

function totalRevenue() {
  let result = softwareCompany.revenue.yearly.map(({ amount }) => amount).reduce((acc, cur) => acc + cur, 0);

  console.log(result)
}

totalRevenue();