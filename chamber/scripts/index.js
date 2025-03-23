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

  // My OpenWeatherMap API key from https://openweathermap.org/api
const apiKey = '6f3b19857e9137b436f8b8a80044b24a';  // My API key
const city = 'Citadelle';  // My city

// Fetch current weather and 3-day forecast
const fetchWeather = async () => {
    try {
        // Current weather data
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const currentWeatherData = await currentWeatherResponse.json();
        
        // Forecast data (3-day forecast)
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=3`);
        const forecastData = await forecastResponse.json();

        // Current weather info
        const weatherDiv = document.getElementById('weather-info');
        weatherDiv.innerHTML = `
            <p>Current Temperature: ${currentWeatherData.main.temp}°C</p>
            <p>Weather: ${currentWeatherData.weather[0].description}</p>
        `;
        
        // 3-day forecast info
        const forecastDiv = document.getElementById('forecast-info');
        forecastDiv.innerHTML = forecastData.list.map(day => `
            <div class="forecast-day">
                <p><strong>${new Date(day.dt * 1000).toLocaleDateString()}</strong></p>
                <p>Temp: ${day.main.temp}°C</p>
                <p>Weather: ${day.weather[0].description}</p>
            </div>
        `).join('');
        
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>Failed to load weather data.</p>`;
        document.getElementById('forecast-info').innerHTML = `<p>Failed to load forecast data.</p>`;
    }
};

// Call fetchWeather to load data on page load
document.addEventListener("DOMContentLoaded", function () {
    fetchWeather();
});

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
           <img src="images/${member.image}" alt="${member.membership_level}">
           <h3>${member.name}</h3>
           <p>${member.address}</p>
           <p>${member.phone}</p>
           <a href="${member.website}" target="_blank">Visit Website</a>`;
       membersContainer.appendChild(memberCard);
   });
 }
 
 document.getElementById('gridView').addEventListener('click', () => {
   document.getElementById('members').style.display = 'flex';  // Grid View
 });
 
 window.onload = fetchMembers;

 const fetchEvents = async () => {
  const events = [
      { title: "Spring Sale", date: "April 10, 2025", description: "Discounts up to 50%!" },
      { title: "Summer Carnival", date: "June 15, 2025", description: "Join us for food, music, and fun." }
  ];

  const eventListDiv = document.getElementById('event-list');
  eventListDiv.innerHTML = events.map(event => `
      <div class="event">
          <h3>${event.title}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Description:</strong> ${event.description}</p>
      </div>
  `).join('');
};

fetchEvents();
