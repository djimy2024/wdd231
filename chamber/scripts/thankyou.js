  // Get the current year and populate the #currentyear span in the footer
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Get the document's last modified date and populate the #lastModified paragraph
  document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
 
 const hamburgerElement = document.querySelector('#myButton');
 const navElement = document.querySelector('.menulinks');
 
 hamburgerElement.addEventListener('click', () =>{
     navElement.classList.toggle('open');
     hamburgerElement.classList.toggle('open');
 });
// Function to get query parameters from the URL
function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('first-name');
    const lastName = urlParams.get('last-name');
    const organizationalTitle = urlParams.get('organizational-title');
    const email = urlParams.get('email');
    const PhoneNumber = urlParams.get('Phone-number');
    const business = urlParams.get('business');
    const membershipLevel = urlParams.get('membership-level');
    return { firstName, lastName, organizationalTitle, email, PhoneNumber, business, membershipLevel};
}

// Function to display form data
function displayFormData() {
    const data = getQueryParams();
    const submittedDataElement = document.getElementById('submitted-data');

    // Display the information entered in the form
    submittedDataElement.innerHTML = `
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Organizational Title:</strong> ${data.organizationalTitle}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.PhoneNumber}</p>
        <p><strong>Business/Organization's Name:</strong> ${data.business}</p>
        <p><strong>Membership Level:</strong> ${data.membershipLevel}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
    `;
}

// Call the function to display form data
displayFormData();

