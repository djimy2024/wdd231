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

document.addEventListener("DOMContentLoaded", function() {
    // Load items from data.json
    fetch("data/gallery.json")
        .then(response => response.json())
        .then(data => {
            const itemsGallery = document.getElementById("items-gallery");
            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <figure>
                        <!-- Add loading="lazy" here for lazy loading -->
                        <img src="${item.image}" alt="${item.name}" loading="lazy">
                        <figcaption>
                            <h2>${item.name}</h2>
                            <address>${item.address}</address>
                            <p>${item.description}</p>
                            <button>Learn More</button>
                        </figcaption>
                    </figure>
                `;
                itemsGallery.appendChild(card);
            });
        });

    // Handle visitor message using localStorage
    const visitorMessage = document.getElementById("visitor-message");
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const currentDate = Date.now();
        const timeDifference = currentDate - lastVisit;
        const daysSinceLastVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysSinceLastVisit === 1 ? "day" : "days";
            visitorMessage.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
        }
    }

    // Store the current visit date
    localStorage.setItem("lastVisit", Date.now());
});

