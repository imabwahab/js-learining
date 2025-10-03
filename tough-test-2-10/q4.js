/*
4. Grouping & Aggregation
You have an array of orders:

const orders = [
  { id: 1, customer: "Ali", total: 20, date: "2025-10-01" },
  { id: 2, customer: "Sara", total: 30, date: "2025-10-01" },
  { id: 3, customer: "Ali", total: 50, date: "2025-10-02" }
];
// Q: Group orders by customer and calculate total spent by each customer.
*/

const orders = [
  { id: 1, customer: "Ali", total: 20, date: "2025-10-01" },
  { id: 2, customer: "Sara", total: 30, date: "2025-10-01" },
  { id: 3, customer: "Ali", total: 50, date: "2025-10-02" }
];

function groupByCustomer(orders) {
  const result = {};
  for (const order of orders) {
    console.log(order);
    const { customer, total } = order;
    console.log(customer, total);
    if (!result[customer]) {
      result[customer] = 0;
    }

    result[customer] += total;

  }

  console.log(result)

  return result;
}

console.log(groupByCustomer(orders))