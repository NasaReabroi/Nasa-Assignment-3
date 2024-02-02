alert('Welcome to Nasa Webpage !')

document.addEventListener("DOMContentLoaded", function () {
    var welcomeDiv = document.getElementById("welcome");
    var hours = new Date().getHours();

    var isMorning = hours >= 5 && hours < 12;
    var isAfternoon = hours >= 12 && hours < 17;
    var isEvening = hours >= 17 || hours < 5;

    var welcomeMessage;

    if (isMorning) {
        welcomeMessage = "Good morning! Welcome to our site.";
    } else if (isAfternoon) {
        welcomeMessage = "Good afternoon! Welcome to our site.";
    } else {
        welcomeMessage = "Good evening! Welcome to our site.";
    }

    // Add the welcome message to the welcomeDiv
    welcomeDiv.textContent = welcomeMessage;
});