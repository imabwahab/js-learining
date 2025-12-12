
import { stateBankOfPakistan } from "./data.js";

// 5. Calculate the total stock of PKR notes stored across all vaults for 5000 and 1000 denominations combined.

function stockOfNotes() {
  return stateBankOfPakistan.currency.notes
    .filter(({ denomination }) => denomination === 5000)
    .flatMap(({ vaults }) => vaults)
    .reduce((a, b) => a + b.stored, 0)
}

console.log(stockOfNotes())