document.addEventListener("DOMContentLoaded", () => {
    const events = [
        { title: "Event 1", description: "Description for Event 1", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 2", description: "Description for Event 2", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 3", description: "Description for Event 3", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 4", description: "Description for Event 4", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 5", description: "Description for Event 5", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 6", description: "Description for Event 6", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 7", description: "Description for Event 7", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 8", description: "Description for Event 8", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 9", description: "Description for Event 9", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 10", description: "Description for Event 10", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 11", description: "Description for Event 11", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 12", description: "Description for Event 12", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 13", description: "Description for Event 13", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 14", description: "Description for Event 14", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 15", description: "Description for Event 15", imageUrl: "https://via.placeholder.com/300x150" },
        { title: "Event 16", description: "Description for Event 16", imageUrl: "https://via.placeholder.com/300x150" },

    ];

    const eventsContainer = document.getElementById("events-container");
    const modal = document.getElementById("registration-form-container");
    const closeModalButton = document.getElementById("close-button");
    const registrationForm = document.getElementById("registration-form");
    const eventNameInput = document.getElementById("event_name");

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.className = "event-card";

        eventCard.innerHTML = `
            <img src="${event.imageUrl}" alt="${event.title}">
            <div class="event-card-content">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <button class="register-button">Register</button>
            </div>
        `;

        eventCard.querySelector(".register-button").addEventListener("click", () => {
            eventNameInput.value = event.title;
            modal.style.display = "flex";
        });

        eventsContainer.appendChild(eventCard);
    });

    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = {
            user_name: registrationForm.user_name.value,
            user_email: registrationForm.user_email.value,
            event_name: registrationForm.event_name.value
        };

        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data);
            modal.style.display = "none";
            registrationForm.reset();
        })
        .catch(error => {
            alert('Error: ' + error);
        });
    });
});
