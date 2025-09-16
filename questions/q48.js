const person = {
  name: "Abdul Wahab",
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

// -----------------------------
// .call()
// -----------------------------
// Purpose: Calls the function immediately with a given `this` value.
// Arguments are passed individually.
greet.call(person, "Hello", "!");  // Output: Hello, Abdul Wahab!


// -----------------------------
// .apply()
// -----------------------------
// Purpose: Also calls the function immediately with a given `this` value.
// Arguments are passed as an array.
greet.apply(person, ["Hi", "."]);  // Output: Hi, Abdul Wahab.


// -----------------------------
// .bind()
// -----------------------------
// Purpose: Returns a new function with a bound `this` value.
// It does NOT call the function immediately — you can call it later.
const greetPerson = greet.bind(person, "Welcome", "!!");

// Now call the returned function
greetPerson();  // Output: Welcome, Abdul Wahab!!
