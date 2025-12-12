
import { stateBankOfPakistan } from "./data.js";

// 12. List all branch employees in Lahore who either handled more than 400 transactions or resolved more than 100 support tickets.


function employeesInLahore() {
  return stateBankOfPakistan.branches.flatMap(({ city, departments }) => {
    if (city === "Lahore") return departments
  })
    .flatMap(({ teams }) => teams)
    .flatMap(({ employees }) => employees)
    .map((emp) => {
      if (emp?.transactionsHandled > 400 || emp?.ticketsResolved > 100) {
        console.log(emp)
      }
    })

}

employeesInLahore()