/* Define a generic type PaginatedResult<T> with : 
{
  items: T[];
  total: number;
  page: number;
  perPage: number;
}
and use it for both User and Product.

*/



type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  perPage: number;
}

type User = {
  _id: number
  name: string,
  address: string
}

type Product = {
  _id: number,
  name: string,
  purpose: string,

}

let users: PaginatedResult<User> = {
  items: [
    { _id: 1, name: "Abdul Wahab", address: "chishtian" },
    { _id: 2, name: "Hamza", address: "bahawalpur" }
  ],
  total: 2,
  page: 1,
  perPage: 5
}

console.log(users);

let products: PaginatedResult<Product> = {
  items: [
    { _id: 1, name: "Laptop", purpose: "Work" },
    { _id: 2, name: "Phone", purpose: "Communication" }
  ],
  total: 2,
  page: 1,
  perPage: 10

}

console.log(products)

export { }