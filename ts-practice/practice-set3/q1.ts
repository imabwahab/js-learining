// Create a Product with id, name, price and instock.

type Product = {
  _id: string,
  name: string,
  price: number,
  inStock: boolean

}

let products: Product[] = [{
  _id: "id1",
  name: 'pro1',
  price: 20,
  inStock: true
}, {
  _id: "id2",
  name: 'pro2',
  price: 50,
  inStock: true
}, {
  _id: "id2",
  name: 'pro2',
  price: 50,
  inStock: false
}]


function getTotalPrice(products: Product[]): number {
  let totalPrice = 0;
  for (const product of products) {
    if (product.inStock) {
      totalPrice += product.price
    }
  }

  return totalPrice;
}

console.log(getTotalPrice(products))

export { }