// Define a type alias ApiResponse<T> for objects like:

// { status: number; message: string; data: T }


// Then use it for two APIs: User and Product.


type ApiResponse<T> = {
  status: number;
  message: string;
  data: T
}


// Example 1 : For User

type User = {
  id: number;
  name: string;
  active: boolean
}

type UserResonse = ApiResponse<User>;

const userApiResponse: UserResonse = {
  status: 200,
  message: "User fetched successfully",
  data: {
    id: 1,
    name: "Abdul Wahab",
    active: true
  }
};

console.log(userApiResponse);

// Example 2 : For Product

type Product = {
  id: number;
  title: string;
  price: number
}

type ProductResponse = ApiResponse<Product>;

const productApiResponse: ProductResponse = {
  status: 200,
  message: "Product fetched successfully",
  data: {
    id: 1,
    title: "Laptop",
    price: 999.99
  }
}


console.log(productApiResponse)