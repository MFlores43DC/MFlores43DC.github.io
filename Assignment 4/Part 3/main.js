/* Validated via https://www.minifier.org/javascript-validator 
ChatGPT was used in the creation of this js file

JavaScript Interactions:
1. Headings are clickable; clicking them will insert content into the HTML and change the arrow direction
2. After doing the above, inserted content will pulse red for 500ms
*/

// Query selectors get the divs for each heading in the HTML by use of IDs
const skillsHeading = document.getElementById("skills-heading");
const workHeading = document.getElementById("work-heading");
const volunteerHeading = document.getElementById("volunteer-heading");
const educationHeading = document.getElementById("education-heading");
// End of query selection

// Content from resume added to arrays for future proofing (easier to add here than in HTML for me). Array generation was automated by sending my resume to ChatGPT to save time
const skills = [
  "Punctual, reliable and able to work effectively and efficiently with minimal supervision",
  "Friendly, outgoing and a committed team player who has earned the respect of peers through dedication",
  "Able to effectively multi-task and work well under pressure",
  "Excellent verbal, written, interpersonal, communication and organizational skills",
  "Capable of learning quickly and independently as needed; able to adapt to any working environment",
  "Frequently commended by peers and superiors as a top performer",
  "Adept at thorough, timely troubleshooting and problem-solving through lateral and linear thinking",
  "Able to deliver information while considering a given client’s skill, knowledge and understanding",
  "Responsive to positive and negative feedback",
  "Able to conduct repetitive tasks for long periods",
  "Responds appropriately in situations where a client or customer is not satisfied with services provided",
  "Technologically inclined; computer literate and capable of working with small electronic components"
];

const workExperiences = [
  {
    // Each work experience/volunteer experience/education background has a title object, date object and tasks/details object. Tasks/details can be multiple bullet points and so they are added as nested arrays
    title: "GENERAL INFORMATION OFFICER - Gatestone & Co.",
    date: "November 2022 to February 2023, October 2023 to December 2024",
    tasks: [
      "Responsible for taking phone calls from clients on behalf of the government of Canada to deliver general information and directory services from a database covering a wide range of Canadian federal government programs including Canada Pension Plan, Employment Insurance, Passport Service and more"
    ]
  },
  {
    title: "SEAFOOD CLERK - Metro",
    date: "August 2019 to October 2022",
    tasks: [
      "Responsible for serving various seafood products, steaming lobsters, preparing trays for the display case, wrapping self-serve portions of fish and restocking certain food products",
      "Responsible for keeping the seafood area clean, as well as opening and closing the seafood area and assisting other departments when needed"
    ]
  }
];

const volunteerExperiences = [
  {
    title: "STAFF VOLUNTEER - Notice Niche Games",
    date: "Irregular/On-Call",
    tasks: [
      "Assisted with set-up, supervision and tear-down at events hosted by Notice Niche Games, as well as conventions where Notice Niche Games was responsible for hosting public gaming areas"
    ]
  },
  {
    title: "SPECIALIZED HARDWARE CONSULTANT - York University Fighting Game Community",
    date: "Irregular/On-Call",
    tasks: [
      "Assisted with online (primarily) or in-person (when available) technical support, including diagnosis, repair and modifications to controllers and other electronics for club members",
      "When available, assisted in setup and teardown of club activities involving hooking up several consoles and monitors for tournaments and casual play",
      "Diagnoses, repairs and modifications involve using multimeters, soldering irons, crimping tools, drills, heat guns, testing software, 3D model and circuit board design software, and fine hand motor skills to work with small circuitry components."
    ]
  },
  {
    title: "SOCIAL MEDIA COORDINATOR - York University Fighting Game Community",
    date: "September 2016 to May 2018",
    tasks: [
      "Responsible for the management of the club’s official social media accounts",
      "Assigned a schedule with which to post advertisements for club events and share content relevant to club interests"
    ]
  },
  {
    title: "STAFF VOLUNTEER - Anime North Gaming",
    date: "May 2019",
    tasks: [
      "Responsible for checking ID for controller rental, communicating with hundreds of convention participants and other staff, and ensuring all articles belonging to the convention remained in the gaming area",
      "Assisted in setup and teardown of console, retro, and VR gaming. This involved lifting heavy equipment out of a truck and hooking up several consoles and monitors for patrons to play on"
    ]
  },
  {
    title: "STAFF VOLUNTEER - Otakuthon Gaming",
    date: "On-Call yearly, August 2022 to 2024",
    tasks: [
      "Served as one of the primary points of contact between the convention staff based in Montreal and the segment of volunteer staff from Toronto",
      "Responsible for equipment and area supervision while convention patrons participated in various gaming activities",
      "Assigned to Rhythm and Music Gaming, but assisted with hosting fighting game tournaments, LAN gaming, and retro gaming when needed",
      "Assisted in setup and teardown of a large convention center room with many gaming setups consisting of equipment of various sizes and weights",
      "Responsible for taking badge numbers to form a queue for various games, explaining how registration works, and ensuring all patrons had a chance to participate"
    ]
  }
];

const education = [
  {
    title: "ONTARIO TECH UNIVERSITY - Technology Management (Bachelor of Commerce)",
    date: "September 2018 to May 2022",
    details: [
      "Relevant academic documents are available upon request",
      "Program and courses provided educational experience in change management, project management, enterprise analytics, business ethics, and various types of business software such as Microsoft Office applications, Tableau and SAP software"
    ]
  },
  {
    title: "DURHAM COLLEGE - Computer Programming",
    date: "January 2025 to Present",
    details: [
      "Durham College Honour Roll (Winter 2025, January Intake)"
    ]
  }
];
// End of array declaration

// Function definition to have content pulse red for 500ms
function pulseColor(element, color = "red", duration = 500) {
  const originalColor = element.style.color; // Stores original colour for later
  element.style.color = color; // Set element to red colour
  setTimeout(() => {
    element.style.color = originalColor;
  }, duration); // After duration (set above as 500ms) passes, revert to stored original colour
}

//Function to change class of clickable headers
function changeClass(element) {
  if (element.classList.contains("unclicked")) {
    element.classList.remove("unclicked");
    element.classList.add("clicked");
    // If the element currently has the "unclicked" class, remove it and add the "clicked" class in its place
  } else {
    element.classList.remove("clicked");
    element.classList.add("unclicked");
    // Vice versa
  }
}

// Skills
skillsHeading.addEventListener("click", function () {
    // wait for a click on the "Skills" heading
  const skillsDiv = document.getElementById("skills");
  skillsDiv.innerHTML = "";
  // After clicking the header, set the content in the child div to be blank so that content isnt duplicated by multiple clicks
  pulseColor(skillsDiv);
  // function call to pulse div content to a different colour

  changeClass(skillsHeading);
    //function call to switch the header's class to whichever it does not already have

  if (skillsHeading.classList.contains("clicked")) {
    skillsHeading.textContent = "Skills v";
    // If the element now has the "clicked" class, change its text ('>' is now 'v' to indicate an expanded category)

    const ul = document.createElement("ul");
    // Create an unordered llist
    for (let i = 0; i < skills.length; i++) {
        // For each entry in the relevant array...
      const li = document.createElement("li");
      li.textContent = skills[i];
      // ... create a list item element containing that entry from the array...
      ul.appendChild(li);
      // ... and append that list item to the unordered list
    }
    skillsDiv.appendChild(ul);
    // When the for loop is done, append the resulting unordered list to the containing div
  } else {
    skillsHeading.textContent = "Skills >";
    // If the element now has the "unclicked" class, change its text ('v' is now '>' to indicate a collapsed category)
  }
});
// This logic is reused for Work Experience, Volunteer Experience and Educational Background

// Work
// Same logic as Skills section
workHeading.addEventListener("click", function () {
  const workDiv = document.getElementById("work-experience");
  workDiv.innerHTML = "";
  pulseColor(workDiv);

  changeClass(workHeading);

  if (workHeading.classList.contains("clicked")) {
    workHeading.textContent = "Work Experience v";

    const ol = document.createElement("ol");
    for (let i = 0; i < workExperiences.length; i++) {
      const item = workExperiences[i];
      const li = document.createElement("li");

      const p = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = item.title;
      p.appendChild(strong);
      li.appendChild(p);

      li.appendChild(document.createTextNode(item.date)); // Adds the date object for the item as plain text within the list item so it is visually separated

      const ul = document.createElement("ul"); // Nested for loop since tasks object is a nested array with multiple bullet points
      for (let j = 0; j < item.tasks.length; j++) {
        const taskLi = document.createElement("li");
        taskLi.textContent = item.tasks[j];
        ul.appendChild(taskLi);
      }

      li.appendChild(ul);
      ol.appendChild(li);
    }
    workDiv.appendChild(ol);

  } else {
    workHeading.textContent = "Work Experience >";
  }
});

// Volunteer Experience
// Same logic as Skills and Work Experience section
volunteerHeading.addEventListener("click", function () {
  const volunteerDiv = document.getElementById("volunteer-experience");
  volunteerDiv.innerHTML = "";
  pulseColor(volunteerDiv);

  changeClass(volunteerHeading);

  if (volunteerHeading.classList.contains("clicked")) {
    volunteerHeading.textContent = "Volunteer Experience v";

    const ol = document.createElement("ol");
    for (let i = 0; i < volunteerExperiences.length; i++) {
      const item = volunteerExperiences[i];
      const li = document.createElement("li");

      const p = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = item.title;
      p.appendChild(strong);
      li.appendChild(p);

      li.appendChild(document.createTextNode(item.date));

      const ul = document.createElement("ul");
      for (let j = 0; j < item.tasks.length; j++) {
        const taskLi = document.createElement("li");
        taskLi.textContent = item.tasks[j];
        ul.appendChild(taskLi);
      }

      li.appendChild(ul);
      ol.appendChild(li);
    }
    volunteerDiv.appendChild(ol);

  } else {
    volunteerHeading.textContent = "Volunteer Experience >";
  }
});

// Education
// Same logic as Skills and Work Experience section
educationHeading.addEventListener("click", function () {
  const educationDiv = document.getElementById("education");
  educationDiv.innerHTML = "";
  pulseColor(educationDiv);

  changeClass(educationHeading);

  if (educationHeading.classList.contains("clicked")) {
    educationHeading.textContent = "Educational Background v";

    const ol = document.createElement("ol");
    for (let i = 0; i < education.length; i++) {
      const item = education[i];
      const li = document.createElement("li");

      const p = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = item.title;
      p.appendChild(strong);
      li.appendChild(p);

      li.appendChild(document.createTextNode(item.date));

      const ul = document.createElement("ul");
      for (let j = 0; j < item.details.length; j++) {
        const detailLi = document.createElement("li");
        detailLi.textContent = item.details[j];
        ul.appendChild(detailLi);
      }

      li.appendChild(ul);
      ol.appendChild(li);
    }
    educationDiv.appendChild(ol);

  } else {
    educationHeading.textContent = "Educational Background >";
  }
});
