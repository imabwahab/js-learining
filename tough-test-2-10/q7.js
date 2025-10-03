/*
7. Time-Series Aggregation
Given sales data:

const sales = [
  { date: "2025-10-01", amount: 100 },
  { date: "2025-10-01", amount: 50 },
  { date: "2025-10-02", amount: 200 }
];
// Q: Aggregate total sales per date → { "2025-10-01": 150, "2025-10-02": 200 }
*/

const sales = [
  { date: "2025-10-01", amount: 100 },
  { date: "2025-10-01", amount: 50 },
  { date: "2025-10-02", amount: 200 }
];

function aggregateSalesByDate(sales) {
  const result = {};
  for (const sale of sales) {
    const { date, amount } = sale;
    // console.log(amount)

    if (!result[date]) {
      result[date] = 0;
    }

    result[date] += amount;
  }
  // console.log(result)
  return result;
}

const aggregated = aggregateSalesByDate(sales);
console.log(aggregated);

// alternative : method
const calcAggregate = sales.reduce((acc, {date, amount}) => {
  acc[date] = (acc[date] || 0) + amount;
  return acc;
}, {})
console.log(calcAggregate)