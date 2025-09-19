const wahabProfile = {
  personalInfo: {
    basicDetails: {
      fullName: "Abdulah Wahab",
      age: 42,
      occupation: "Software Engineer"
    },
    educationHistory: {
      degreeInfo: {
        degree: "Bachelor's in Computer Science",
        university: "Tech University",
        graduationYear: 2005
      },
      academicPerformance: {
        gpa: 3.8,
        courses: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Machine Learning Basics"]
      }
    }
  },
  locationInfo: {
    addressDetails: {
      street: "456 Elm Street",
      city: "Techville",
      state: "California",
      zipCode: "90210",
      country: "USA"
    },
    geoCoordinates: {
      latitude: 34.0522,
      longitude: -118.2437
    }
  },
  contactInfo: {
    communication: {
      email: "abdulah.wahab@example.com",
      phone: "+1-555-123-4567"
    },
    socialNetworks: {
      profiles: {
        twitter: "@abdulahwahab",
        linkedin: "linkedin.com/in/abdulahwahab",
        github: "github.com/abdulahwahab"
      }
    }
  },
  interests: {
    hobbiesList: ["Coding", "Hiking", "Reading Sci-Fi Books", "Playing Guitar", "Photography"]
  },
  familyDetails: {
    spouseInfo: {
      name: "Aisha Rahman",
      age: 40,
      occupation: "Teacher"
    },
    childrenInfo: [
      {
        childDetails: { name: "Zara Wahab", age: 15 },
        education: { school: "High School A" },
        interests: ["Art", "Music"]
      },
      {
        childDetails: { name: "Omar Wahab", age: 12 },
        education: { school: "Middle School B" },
        interests: ["Sports", "Video Games"]
      },
      {
        childDetails: { name: "Lina Wahab", age: 8 },
        education: { school: "Elementary School C" },
        interests: ["Reading", "Drawing"]
      }
    ],
    petsInfo: [
      {
        petDetails: { type: "Dog", name: "Max" },
        breed: "Labrador",
        age: 5
      },
      {
        petDetails: { type: "Cat", name: "Whiskers" },
        breed: "Siamese",
        age: 3
      }
    ]
  },
  professionalInfo: {
    workHistory: [
      {
        jobDetails: { company: "Tech Corp", role: "Senior Developer" },
        dates: { startDate: "2015-06-01", endDate: "Present" },
        responsibilities: ["Lead team projects", "Code reviews", "Architecture design", "Mentoring juniors"]
      },
      {
        jobDetails: { company: "Startup Inc", role: "Junior Developer" },
        dates: { startDate: "2006-01-01", endDate: "2015-05-31" },
        responsibilities: ["Bug fixing", "Feature implementation", "Testing"]
      }
    ],
    skillsSet: {
      technicalSkills: {
        programmingLanguages: ["JavaScript", "Python", "Java", "C++"],
        frameworks: ["React", "Node.js", "Spring Boot"]
      },
      tools: ["Git", "Docker", "Kubernetes", "AWS"]
    }
  },
  preferences: {
    reading: { favoriteBooks: ["1984 by George Orwell", "Dune by Frank Herbert", "The Hitchhiker's Guide to the Galaxy by Douglas Adams"] },
    travel: {
      history: [
        { destination: "Paris, France", year: 2018, duration: "2 weeks" },
        { destination: "Tokyo, Japan", year: 2020, duration: "10 days" },
        { destination: "New York, USA", year: 2022, duration: "1 week" }
      ]
    }
  }
};




// Task 1: Retrieve Basic Information

// Write a function that returns Abdul Wahab and occupation as a string in the format "Name Abdul Wahab"
function getBasicInfo(profile) {
  console.log(profile)
  return `Name : ${profile.personalInfo.basicDetails.fullName}, Occupation:${profile.personalInfo.basicDetails.occupation}`;
}
console.log(getBasicInfo(wahabProfile));



// Task 2: Calculate Years of Experience
// Write a function that calculates the total years of work experience based on the workHistory array.

// Assume the current year is 2025. Return the total years as a number.

function calculateWorkExperience(profile) {

  const workHistory = profile.professionalInfo.workHistory;
  let totalYears = 0;
  const currentYear = 2025;
  workHistory.forEach(job => {
    const startYear = new Date(job.dates.startDate).getFullYear();
    const endYear = job.dates.endDate === "Present" ? currentYear : new Date(job.dates.endDate).getFullYear();
    totalYears += (endYear - startYear);
  });
  return totalYears;
}
console.log(calculateWorkExperience(wahabProfile)); // Expected: 19




// Task 3: List Children's Interests
// Write a function that returns a single array of all unique interests of Abdulah Wahab's children.

function getChildrenInterests(profile) {

  const interestsSet = new Set();
  profile.familyDetails.childrenInfo.forEach(child => {
    child.interests.forEach(interest => interestsSet.add(interest));
  });
  return Array.from(interestsSet);

}


console.log(getChildrenInterests(wahabProfile)); // Expected: ["Art", "Music", "Sports", "Video Games", "Reading", "Drawing"]





// Task 4: Check Technical Skills
// Write a function that checks if Abdulah Wahab has a specific programming language in his skills.
// Return true if the language exists, false otherwise. Case-insensitive.


function hasProgrammingLanguage(profile, language) {

  const languages = profile.professionalInfo.skillsSet.technicalSkills.programmingLanguages;
  return languages.some(lang => lang.toLowerCase() === language.toLowerCase());
}

console.log(hasProgrammingLanguage(wahabProfile, "Python")); // Expected: true



// Task 5: Get Most Recent Travel
// Write a function that returns the most recent travel destination and year as an object { destination, year }.
function getMostRecentTravel(profile) {
  const travelHistory = profile.preferences.travel.history;
  if (travelHistory.length === 0) {
    return null; // No travel history available
  }
  const mostRecentTrip = travelHistory.reduce((latest, trip) => {
    return (trip.year > latest.year) ? trip : latest;
  }, travelHistory[0]);
  return { destination: mostRecentTrip.destination, year: mostRecentTrip.year };

}

console.log(getMostRecentTravel(wahabProfile)); // Expected: { destination: "New York, USA", year: 2022 }

// Task 6: Validate Pet Ages
// Write a function that checks if all pets are older than 2 years. Return true if all are, false otherwise.

function arePetsOlderThanTwo(profile) {
  return profile.familyDetails.petsInfo.every(pet => pet.age > 2);
}


console.log(arePetsOlderThanTwo(wahabProfile)); // Expected: true




// Task 7: Add New Hobby
// Write a function that adds a new hobby to the hobbiesList array and returns the updated array.
// Ensure the hobby is not already in the list (case-insensitive).

function addHobby(profile, newHobby) {

  const hobbies = profile.interests.hobbiesList;
  const hobbyLower = newHobby.toLowerCase();
  if (!hobbies.some(hobby => hobby.toLowerCase() === hobbyLower)) {
    hobbies.push(newHobby);
  }
  return hobbies;
}

console.log(addHobby(wahabProfile, "Swimming")); // Expected: ["Coding", "Hiking", "Reading Sci-Fi Books", "Playing Guitar", "Photography", "Swimming"]




// Task 8: Filter Courses by Keyword
// Write a function that returns an array of courses containing a specific keyword (case-insensitive).


function filterCoursesByKeyword(profile, keyword) {
  const courses = profile.personalInfo.educationHistory.academicPerformance.courses;
  const lowerCaseKeyword = keyword.toLowerCase();
  return courses.filter(course => course.toLowerCase().includes(lowerCaseKeyword));

}

console.log(filterCoursesByKeyword(wahabProfile, "Data")); // Expected: ["Data Structures", "Database Systems"]



// Task 9: Generate Contact Summary
// Write a function that returns a contact summary object with email, phone, and all social media profiles.
function getContactSummary(profile) {
  // Your code here
}

console.log(getContactSummary(wahabProfile)); // Expected: { email: "abdulah.wahab@example.com", phone: "+1-555-123-4567", twitter: "@abdulahwahab", linkedin: "linkedin.com/in/abdulahwahab", github: "github.com/abdulahwahab" }





// Task 10: Count Responsibilities
// Write a function that returns the total number of responsibilities across all jobs in workHistory.


function countTotalResponsibilities(profile) {

  return profile.professionalInfo.workHistory.reduce((total, job) => total + job.responsibilities.length, 0);
}


console.log(countTotalResponsibilities(wahabProfile)); // Expected: 7