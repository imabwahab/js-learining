// 8. Find all vault IDs that store 5 PKR and 10 PKR coins along with their stored quantities.


import { stateBankOfPakistan } from "./data.js";


function storedQuantityofNotes() {
  return stateBankOfPakistan.currency.coins
    .filter(({ denomination }) => denomination === 10 || denomination === 5)
    .flatMap(({ vaults }) => vaults)
}

console.log(storedQuantityofNotes())