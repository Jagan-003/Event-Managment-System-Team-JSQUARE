document.getElementById('hamburger').addEventListener('click', function () {
    console.log('Hamburger clicked!');
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Array of events with title and date
var events = [
    { imgSrc: "taylor.jpeg", date: new Date("Aug 28, 2024 14:00:00") },
    { imgSrc: "Alan walker.jpg", date: new Date("Aug 31, 2024 16:00:00") },
    { imgSrc: "Les brown.jpeg", date: new Date("Oct 10, 2024 16:00:00") },
];

// Find the next upcoming event
var now = new Date().getTime();
var nextEvent = events.reduce((next, event) => {
    return (event.date > now && (!next || event.date < next.date)) ? event : next;
}, null);

// If there is a next event, start the countdown
if (nextEvent) {

    document.getElementById("event-image").src = nextEvent.imgSrc;

    var countdownFunction = setInterval(function() {
        var now = new Date().getTime();
        var distance = nextEvent.date - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        updateCountdown('days', days);
        updateCountdown('hours', hours);
        updateCountdown('minutes', minutes);
        updateCountdown('seconds', seconds);

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.querySelector(".countdown").innerHTML = "Event Started";
        }
    }, 1000);
}

// Function to animate and update countdown values
function updateCountdown(id, value) {
    var element = document.getElementById(id);
    var oldValue = parseInt(element.innerText);
    if (oldValue !== value) {
        element.style.transform = "scale(1.2)";
        setTimeout(() => {
            element.innerText = value < 10 ? "0" + value : value;
            element.style.transform = "scale(1)";
        }, 300);
    }
}

// Display Upcoming Events
var upcomingEventsList = document.getElementById('upcoming-events-list');
events.forEach(event => {
    var eventItem = document.createElement('div');
    eventItem.className = 'upcoming-event-item';
    eventItem.innerHTML = `
        <img src="${event.imgSrc}" alt="Event Image">
        <p>Date: ${event.date.toDateString()}</p>
        <p>Time: ${event.date.toLocaleTimeString()}</p>
    `;
    upcomingEventsList.appendChild(eventItem);
});

// Carousel for Featured Events
var featuredEvents = [
    { imgSrc: "img7.jpeg", date: new Date("Nov 5, 2024 10:00:00") },
    { imgSrc: "img13.jpeg", date: new Date("Nov 20, 2024 14:00:00") },
    { imgSrc: "img8.jpeg", date: new Date("Dec 1, 2024 11:00:00") }
];

var carouselInner = document.querySelector('.carousel-inner');
featuredEvents.forEach((event, index) => {
    var carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
    carouselItem.innerHTML = `
        <img src="${event.imgSrc}" alt="Featured Event Image">
        <div class="carousel-caption d-none d-md-block">
            <p>Date: ${event.date.toDateString()}</p>
            <p>Time: ${event.date.toLocaleTimeString()}</p>
        </div>
    `;
    carouselInner.appendChild(carouselItem);
});

