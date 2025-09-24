const companyData = {
  companyId: "C001",
  name: "TechNova",
  founded: 2010,
  employees: [
    {
      id: "E001",
      name: "Sarah Khan",
      role: "Frontend Developer",
      skills: ["JavaScript", "React", "CSS"],
      projects: [
        { projectId: "P001", name: "Website Redesign", status: "Completed" },
        { projectId: "P002", name: "Mobile App", status: "In Progress" }
      ],
      contact: { email: "sarah@technova.com", phone: "111-222-333" }
    },
    {

      id: "E002",
      name: "Ali Raza",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB"],
      projects: [
        { projectId: "P003", name: "API Development", status: "Completed" }
      ],
      contact: { email: "ali@technova.com", phone: "222-333-444" }
    },
    {
      id: "E003",
      name: "John Smith",
      role: "Full Stack Developer",
      skills: ["JavaScript", "Node.js", "React", "SQL"],
      projects: [
        { projectId: "P004", name: "E-Commerce Platform", status: "In Progress" },
        { projectId: "P005", name: "Chat App", status: "Completed" }
      ],
      contact: { email: "john@technova.com", phone: "333-444-555" }
    }
  ],
  departments: [
    { deptId: "D001", name: "Frontend", head: "Sarah Khan" },
    { deptId: "D002", name: "Backend", head: "Ali Raza" }
  ]
};


/*
Part 2: Promises & Async/Await

Create a function getUser(id) that returns a promise. It should resolve with a user object after 2 seconds, or reject if id is invalid.
Example:

getUser(1).then(user => console.log(user)).catch(err => console.log(err));
*/


function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let emp = companyData.employees.find(emp => emp.id === id);
      if (emp) {
        resolve(emp);
      }
      reject("emp not found.");
    }, 2000);
  });
}


(async () => {
  try {
    const user = await getUser('E00');
    console.log(user);
  } catch (error) {
    console.log(error)
  }
})();


/*
Create an async function fetchData() that:

Fetches user data (use a fake API like 'https://dummyjson.com/users')

*/

let fetchData = async () => {
  try {
    let response = await fetch('https://dummyjson.com/users');
    let data = await response.json();
    console.log(data.users);
  } catch (error) {
    console.log(error)
  }

}
fetchData();


// Write a function using Promise.all that fetches data of 3 users simultaneously and returns their names.

let fetchMultipleUsers = async () => {
  try {
    const userIds = ['E001', 'E002', 'E003'];
    const requests = userIds.map(id => getUser(id));
    const employees = await Promise.all(requests);

    const names = employees.map(emp => emp.name);
    console.log(names);
    console.log(employees);
  } catch (error) {
    console.log('Error fetching users:', error);
  }
}

fetchMultipleUsers();