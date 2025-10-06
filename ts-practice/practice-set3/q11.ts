/* Write a function that safely checks for a property: 
 function hasKey<T extends object>(obj: T, key: string): key is keyof T
 and demonstrate its usage.
*/


function hasKey<T extends object>(obj: T, key: string) {
  return key in obj;
}

type User = {
  id: number;
  name: string;
  email?: string;
};

const user: User = {
  id: 1,
  name: "Abdul Wahab",
};

// Using the hasKey function
const keyToCheck = "email";

if (hasKey(user, keyToCheck)) {
  // ✅ TypeScript knows keyToCheck is keyof User
  console.log(`Key "${keyToCheck}" exists with value:`, user[keyToCheck]);
} else {
  console.log(`Key "${keyToCheck}" does not exist in user`);
}


export { }