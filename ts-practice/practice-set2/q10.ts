// Extedn User interface into Admin that has an addition property : role: "Admin" | "superadmin"


interface User {
  name : string,
  age : number
}

interface Admin extends User {
  role : "Admin" | "Superadmin"
}


