   // Get the current year and populate the #currentyear span in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the document's last modified date and populate the #lastModified paragraph
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

  // Array of course objects
const courses = [
    { id: 1, name: 'WDD130', category: 'wdd', credits: 2, completed: true },
    { id: 2, name: 'WDD131', category: 'wdd', credits: 2, completed: true },
    { id: 3, name: 'WDD231', category: 'wdd', credits: 2, completed: false },
    { id: 4, name: 'CSE110', category: 'cse', credits: 2, completed: true },
    { id: 5, name: 'CSE111', category: 'cse', credits: 2, completed: true },
    { id: 6, name: 'CSE210', category: 'cse', credits: 2, completed: true }
];

// Function to display courses
function displayCourses(courseList) {
    const courseListElement = document.getElementById('course-list');
    courseListElement.innerHTML = ''; // Clear previous list
    courseList.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.name} (${course.credits} credits)`;

        // Apply a different style if the course is completed
        if (course.completed) {
            li.style.backgroundColor = '#e0ffe0';  // Light green for completed courses
            li.style.textDecoration = 'line-through'; // Strike-through completed courses
        }

        courseListElement.appendChild(li);
    });

    // Update total credits dynamically
    updateTotalCredits(courseList);
}

// Function to filter courses
function filterCourses(category) {
    let filteredCourses;
    if (category === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.category === category);
    }
    displayCourses(filteredCourses);
}

// Hamburger menu toggle for small screens
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
