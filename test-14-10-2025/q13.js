// Q13. Using a ternary operator, print whether the "Karachi" branch office has more than 40 employees or not.

import { softwareCompany } from "./data.js";


function printBranchInfo() {
  const KarachiBranch = softwareCompany.location.branchOffices.find(({ city }) => city === "Karachi");

  (KarachiBranch.employeeCount > 40) ?
    console.log("Employee is more than 40")
    : console.log("Employee less than 40");
}

printBranchInfo()