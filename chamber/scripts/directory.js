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

async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Log the members to the console
    console.log(members);

    displayMembers(members);
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
    document.getElementById('members').style.display = 'block';  // List View
});

window.onload = fetchMembers;
