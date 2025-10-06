/*
Given : 
interface Employee {
  id: number;
  name: string;
  salary: number;
  department?: string;
}
- Make all properties optional using Partial<Employee>.
- Create a new type that only includes id and name using Pick<Employee, 'id'|'name'>.
- Make a readonly version of Employee.
*/

interface Employee {
  id: number;
  name: string;
  salary: number;
  department?: string;
}

let emp1: Partial<Employee> = {
  id: 123,
  name: 'Abdul Wahab',
  salary: 30000,
  department: 'computer science'
}

let emp2: Pick<Employee, 'id' | 'name'> = {
  id: 1234,
  name: 'Abdul Wahab'
}

let emp3: Readonly<Employee> = {
  id: 12,
  name: 'Hamza',
  salary: 45000,
  department: 'IT'
}