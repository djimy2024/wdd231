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

