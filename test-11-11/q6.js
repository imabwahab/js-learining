/**
 
Object Traversal
Get all keys of the development.teamLead object.
Get all department names using Object.keys().
 */

import { softwareHouse } from "./test.js"

function keysOfTeamLead(softwareHouse) {
  let keys = Object.keys(softwareHouse.development.teamLead);

  console.log(keys);
}

keysOfTeamLead(softwareHouse);

function departmentNames() {
  let keys = (Object.keys(softwareHouse));
  console.log(keys);
  let ans = keys.filter((key) => {
    if (key === 'hr' || key === 'development' || key === 'admin') {
      return key;
    }
  })
  console.log(ans)
}

departmentNames()