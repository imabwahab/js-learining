// Define an enum for different user roles(Admin, Editor, Viewer) and use it in a function.

enum Roles {
  Admin,
  Editor,
  Viewer
}

function checkRole(role: Roles) {
  if (role === Roles.Admin) console.log("Has full access");
  if (role === Roles.Editor) console.log("Can edit");
  else console.log("Has full access");
}

checkRole(Roles.Editor);