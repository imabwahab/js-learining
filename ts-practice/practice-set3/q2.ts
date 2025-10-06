// Make a function filterActiveUsers(users) that takes an array of:

// type User = { id: number; name: string; active: boolean }


// and returns only active users (type-safe).

type User = { id: number; name: string; active: boolean }

const users: User[] = [{ id: 1, name: "Hamza", active: true }, { id: 1, name: "Wahab", active: false }, { id: 1, name: "Ahmed", active: true }]

function activeUsers(users: User[]): User[] {
  return users.filter((user) => user.active);
}

console.log(activeUsers(users))

export {}