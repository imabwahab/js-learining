const state = {
  user: {
    profile: { name: "Ali", age: 25 },
    orders: [{ id: 1, total: 100 }]
  }
};

// ✅ Perform immutable update
const newState = {
  ...state, // 1. Copy top-level object
  user: {
    ...state.user, // 2. Copy 'user' object
    profile: {
      ...state.user.profile, // 3. Copy 'profile' object
      age: 26 // 4. Override the 'age' property
    }
  }
};

// 🔍 Check the result
console.log("Original age:", state.user.profile.age); // 25 — original is unchanged
console.log("Updated age:", newState.user.profile.age); // 26 — updated value
