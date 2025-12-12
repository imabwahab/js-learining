import { stateBankOfPakistan } from "./data.js";


// 7. Retrieve all inspections conducted by Rehan Khan with a score above 90, including bank names and document types.

function inspectionByRehan() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap(({ teams }) => teams)
    .flatMap(({ employees }) => employees)
    .filter(({ name }) => name === "Rehan Khan")
    .flatMap(({ inspections }) => inspections)
    .filter(({ score }) => score > 90)
    .map((bank) => bank.documents
      .map((doc) => console.log(bank.bank, ":", doc.type))
    )
}

inspectionByRehan()