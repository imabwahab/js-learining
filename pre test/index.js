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


function getChildrenInterests(profile) {

  const interestsSet = new Set();
  profile.familyDetails.childrenInfo.forEach(child => {
    child.interests.forEach(interest => interestsSet.add(interest));
  });
  console.log(interestsSet)
  return Array.from(interestsSet);

}


console.log(getChildrenInterests(wahabProfile)); // Expected: ["Art", "Music", "Sports", "Video Games", "Reading", "Drawing"]
