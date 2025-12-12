


import { stateBankOfPakistan } from "./data.js";

// // 15. Calculate the total number of floors across all buildings in the headquarters.

function totalFloors() {
  return stateBankOfPakistan.headquarters.buildings
    .map(({ floors }) => floors)
    .reduce((a, b) => a + b, 0)
}

console.log(totalFloors())