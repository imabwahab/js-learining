/**
2. Flatten Deeply Nested Object
Convert a deeply nested object into a flat object with dot-separated keys.

const data = {
  user: { 
    profile: { 
      name: "Ali", 
      contact: { email: "ali@email.com", phone: "1234" }
    } 
  }
};
// Q: Convert this into:
// { "user.profile.name": "Ali", "user.profile.contact.email": "...", "user.profile.contact.phone": "1234" }
 */

const data2 = {
  user: {
    profile: {
      name: "Ali",
      contact: { email: "ali@email.com", phone: "1234" }
    }
  }
};


function flattenObjects(obj, prefix = '', result = {}) {
  for (const key in obj) {
    console.log(key);
    const newKey = prefix ?  `${prefix}.${key}` : key;

    console.log(result)
    if (typeof obj[key] === 'object' && obj[key] !== null ) {
      flattenObjects(obj[key], newKey, result)
    }
    else {
      result[newKey] = obj[key];
    }
  }
  console.log(result);
  return result
}

const flat = flattenObjects(data2);
console.log(flat)


