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
   
    // JavaScript to display a mobile-specific message
    function checkMobileView() {
       var mobileMessage = document.getElementById('mobile-message');
       if (window.innerWidth <= 768) {
           mobileMessage.style.display = 'block'; // Show on mobile view
       } else {
           mobileMessage.style.display = 'none'; // Hide on larger screens
       }
   }
   
           // Open modal
           function openModal(modalId) {
               document.getElementById(modalId).style.display = "block";
           }
   
           // Close modal
           function closeModal(modalId) {
               document.getElementById(modalId).style.display = "none";
           }
   
           // Close modal if the user clicks outside of the modal content
           window.onclick = function(event) {
               var modals = document.getElementsByClassName("modal");
               for (var i = 0; i < modals.length; i++) {
                   if (event.target == modals[i]) {
                       modals[i].style.display = "none";
                   }
               }
           }
      
   