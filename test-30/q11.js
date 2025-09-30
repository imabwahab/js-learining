

// --- 11. **Find the total number of doctors + ambulances available in emergency facilities.** 


import { railwayStation } from "./data.js";


function findEmergencyInfo() {
  let result = {}
  result = {doctors : railwayStation.station.facilities.emergency.medical.doctors, ambulances: railwayStation.station.facilities.emergency.medical.ambulances}

  return result;
}

console.log(findEmergencyInfo())