// Create an interface User with properties: id: number, name:string, and an optional email.

// interfaces are similar to type aliases , except they only apply to object types.

interface User {
  id: number,
  name: string,
  email?: string
}

const user1: User = {
  id: 123,
  name: "Abdul Wahab",
  email : "w@w.com"
}

console.log(user1)

export { }