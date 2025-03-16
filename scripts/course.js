   // Get the current year and populate the #currentyear span in the footer
   document.getElementById("currentyear").textContent = new Date().getFullYear();

   // Get the document's last modified date and populate the #lastModified paragraph
   document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
   
// Course list data
const courses = [
    { name: "WDD130", code: "WDD100", credits: 2, completed: true },
    { name: "WDD131", code: "CSE120", credits: 2, completed: true},
    { name: "WDD231", code: "WDD200", credits: 2, completed: false },
    { name: "CSE110", code: "CSE130", credits: 2, completed: true },
    {name: "CSE111", code: "CSE130", credits: 2, completed: true },
   {name: "CSE210", code: "CSE130", credits: 2, completed: false }
  ];

  // Function to check screen size and create small boxes for mobile
function checkMobileView() {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';  // Clear any existing course items
  
    // Check if the screen is small (mobile)
    const isMobile = window.innerWidth <= 768;
  
    if (isMobile) {
      // For mobile view, show only course names in small boxes
      courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item', 'mobile-course-item'); // Add 'mobile-course-item' class for styling
  
        // Set HTML content to display only course name
        courseItem.innerHTML = `
          <h3 class="course-name">${course.name}</h3>
        `;
  
        courseList.appendChild(courseItem);
      });
    } else {
      // For larger screens, display full course details (course name, credits, and status)
      courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
  
        // Add class based on completion status
        if (course.completed) {
          courseItem.classList.add('completed');
        } else {
          courseItem.classList.add('incomplete');
        }
  
        // Set HTML content for full details
        courseItem.innerHTML = `
          <h3 class="course-name">${course.name}</h3>
          <p class="credits">${course.credits} Credits</p>
          <p class="status">${course.completed ? 'Completed' : 'Not Completed'}</p>
        `;
  
        courseList.appendChild(courseItem);
      });
    }
  }
  
  // Run the function on page load and whenever the window is resized
  window.addEventListener('load', checkMobileView);
  window.addEventListener('resize', checkMobileView);
// Function to display all courses
function displayAllCourses() {
  const courseList = document.getElementById('course-list');
  courseList.innerHTML = '';
  let totalCredits = 0;

  courses.forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.classList.add('course-item');

    // Add class based on completion status
    if (course.completed) {
      courseItem.classList.add('completed');
    } else {
      courseItem.classList.add('incomplete');
    }

    courseItem.innerHTML = `
      <h3>${course.name} (${course.code})</h3>
      <p>${course.credits} Credits</p>
      ${course.completed ? '<p>Completed</p>' : '<p>Not Completed</p>'}
    `;

    courseList.appendChild(courseItem);
    totalCredits += course.credits;
  });

  document.getElementById('total-credits').textContent = totalCredits;
}

// Function to filter and display WDD courses
function displayWDDCourses() {
  const courseList = document.getElementById('course-list');
  courseList.innerHTML = '';
  let totalCredits = 0;

  courses.filter(course => course.code.startsWith("WDD")).forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.classList.add('course-item');

    // Add class based on completion status
    if (course.completed) {
      courseItem.classList.add('completed');
    } else {
      courseItem.classList.add('incomplete');
    }

    courseItem.innerHTML = `
      <h3>${course.name} (${course.code})</h3>
      <p>${course.credits} Credits</p>
      ${course.completed ? '<p>Completed</p>' : '<p>Not Completed</p>'}
    `;

    courseList.appendChild(courseItem);
    totalCredits += course.credits;
  });

  document.getElementById('total-credits').textContent = totalCredits;
}

// Function to filter and display CSE courses
function displayCSECourses() {
  const courseList = document.getElementById('course-list');
  courseList.innerHTML = '';
  let totalCredits = 0;

  courses.filter(course => course.code.startsWith("CSE")).forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.classList.add('course-item');

    // Add class based on completion status
    if (course.completed) {
      courseItem.classList.add('completed');
    } else {
      courseItem.classList.add('incomplete');
    }

    courseItem.innerHTML = `
      <h3>${course.name} (${course.code})</h3>
      <p>${course.credits} Credits</p>
      ${course.completed ? '<p>Completed</p>' : '<p>Not Completed</p>'}
    `;

    courseList.appendChild(courseItem);
    totalCredits += course.credits;
  });

  document.getElementById('total-credits').textContent = totalCredits;
}

// Hamburger menu toggle for small screens
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
