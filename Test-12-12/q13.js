
import { stateBankOfPakistan } from "./data.js";

// 13. Retrieve all certifications held by employees in the Licensing Team.


function certificationsHeldByLicensingTeam() {
  return stateBankOfPakistan.headquarters.buildings
    .flatMap((building) => building.departments)
    .flatMap((department) => department)
    .flatMap((department) => department.teams)
    .filter(({ name }) => name === "Licensing Team")
    .flatMap(({ employees }) => employees)
    .flatMap((emp) => {
      return emp.certifications?.map((cer) => cer?.name)
    })
}

console.log(certificationsHeldByLicensingTeam())