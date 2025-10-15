import { softwareCompany } from "./data.js";


// Q2. Write a function getTotalEmployeesInBranchOffices() that uses reduce() to calculate the total number of employees in all branch offices.



function getTotalEmployeesInBranchOffices() {
  console.log(softwareCompany);
  const result = softwareCompany.location.branchOffices.map(({ employeeCount }) => employeeCount).reduce((acc, cur) => acc + cur, 0)

  console.log(result)
}


getTotalEmployeesInBranchOffices()