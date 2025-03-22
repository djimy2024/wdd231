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

const apiKey = "6f3b19857e9137b436f8b8a80044b24a"; 

// Fetch weather data
function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert("City not found");
                return;
            }

            const cityName = data.name;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

            document.getElementById("cityName").innerText = `City: ${cityName}`;
            document.getElementById("temperature").innerText = `Temperature: ${temp}°C`;
            document.getElementById("description").innerText = `Condition: ${description}`;
            document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

// Fetch events data
function getEvents() {
    fetch(eventApiUrl)
        .then(response => response.json())
        .then(data => {
            if (!data || data.length === 0) {
                alert("No events found");
                return;
            }

            const eventsList = document.getElementById("eventsList");
            eventsList.innerHTML = ""; // Clear the list before adding new data

            data.forEach(event => {
                const li = document.createElement("li");
                li.innerText = `${event.name} - ${event.date}, ${event.location}`;
                eventsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching events data:", error);
        });
}

// Call getEvents when the page loads
window.onload = getEvents;
async function fetchMembers() {
  const response = await fetch('data/members.json');
  const members = await response.json();

  // Log the members to the console
  console.log(members);

  const shuffledMembers = shuffleArray(members).slice(0, 3);
    
  displayMembers(shuffledMembers);
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
}
function displayMembers(members) {
  const membersContainer = document.getElementById('members');
  membersContainer.innerHTML = '';  // Clear the container

  members.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.classList.add('member-card');
      memberCard.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
      `;
      membersContainer.appendChild(memberCard);
  });
}

document.getElementById('gridView').addEventListener('click', () => {
  document.getElementById('members').style.display = 'flex';  // Grid View
});

document.getElementById('listView').addEventListener('click', () => {
  document.getElementById('members').style.display = 'flex';  // List View
});

window.onload = fetchMembers;
