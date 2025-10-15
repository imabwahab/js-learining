import { softwareCompany } from "./data.js";

// Q9. Write an async function getRevenueForecast() that waits 2 seconds (simulate API fetch using setTimeout and Promise) and then logs the highest yearly revenue amount from revenue.yearly.

async function getRevenueForecast() {
  let hightestRevenue = -999999999;
  return new Promise((resolve) => {
    setTimeout(() => {
      softwareCompany.revenue.yearly.map((year) => {
        if (year.amount > hightestRevenue) {
          hightestRevenue = year.amount;
        }
      })
      resolve(hightestRevenue);
    }, 2000);
  })
}

getRevenueForecast().then((message) => console.log(message))
