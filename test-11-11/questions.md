
Questions:
Accessing Nested Data
Get the email (if available) or name of the HR manager.
Retrieve the city names of all software house offices.
Get the techStack used by the development team lead.
Display the progress of the project "Client Portal UI".

Array Iteration
Print the names of all Frontend Team members.
List all HR employees who joined after 2021.
From the Admin staff, get a list of all assets handled by "Nimra Javed".
Find how many employees are there in total (sum of HR, Development, and Admin staff).

Array Filtering
Get all projects where the progress < 80.
Find all developers who know "React".
Filter HR employees who have taken more than 3 leaves in October.

Mapping
Create an array of all employee names with their salaries.
Map over all development team members and extract their project names.
Generate a list of cities with employeesCount from the offices array.

Date and Time
Find employees (in any department) who joined before 2021.
Calculate how many years the company has been active till today.
Sort all project deadlines in ascending order.

Numbers & Math
Find the total salary expense of the HR department.
Calculate the average salary of the Development Team.
  Get the total project budget (sum of all budget fields).
  Object Traversal
  Get all keys of the development.teamLead object.
  Get all department names using Object.keys().

Conditional Access
Check if "Payroll Automation" project includes "HR" in departmentsInvolved.
Check whether any developer has completed all project tasks (all done: true).

Nested Loops & Conditionals
Get a list of all unique skills across all developers (Frontend + Backend).
Calculate the total progress average of all development projects.
Count how many projects are still ongoing (progress < 100).


Combining Arrays
Merge all HR, Development, and Admin employees into one unified array with a new key department.
After merging, sort the array by salary (descending).


Advanced Filtering
From the merged list above, filter employees who joined after 2020 and earn above 100000.
Find employees who have attended at least one training before 2024-12-31.


Using Reduce
Calculate the total payroll of the entire company using .reduce().
Compute the total number of assets the admin team manages.
Use reduce to find the average progress of all development projects.

Destructuring & Optional Chaining
Use destructuring to extract name and salary of the teamLead.
Use optional chaining to safely access the second milestone’s due date of "Payroll Automation".

Date Comparison
Find all projects whose revised deadline is after 2025-01-01.
List employees whose training dates are in 2025.

Nested Data Aggregation
Count how many tasks (total) are marked as done: false in all projects.
Find the total number of mentees under the team lead.

Complex Query (Multiple Filters)
From all projects, get those:
where "Development" department is involved,
and where at least one milestone is incomplete,
and budget is greater than 500000.

Custom Function
Write a function getEmployeeById(id) that searches the entire company (HR, Dev, Admin) and returns the matching employee object.
Write a function getDepartmentSalary(departmentName) that returns the total salary of all employees in that department.

Chaining Map + Filter + Reduce
Find the total salary of all employees who joined after 2021 and have at least one skill or training.
Create a single array of all project names from all developers and return only those that are incomplete (progress < 100).

Nested Object Mutation
Update "Client Portal UI" project’s progress from 85 to 100 without replacing the entire project object.

Dynamic Path Access
Write a function getValueByPath(obj, path) that can return nested values like
 getValueByPath(softwareHouse, 'development.teams[0].members[0].projects[0].name').

Date Difference
Find how many days are left until each project’s revised deadline.

Deep Copy
Clone the softwareHouse object without keeping reference to the original one.

Deep Search
Write a function findByKeyValue(obj, key, value) that searches deeply nested objects and returns all matches.







