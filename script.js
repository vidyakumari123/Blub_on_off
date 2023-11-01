// script.js
const blubToggle = document.getElementById("blub-toggle");
const blubStatus = document.getElementById("blub-status");

blubToggle.addEventListener("change", function () {
    if (blubToggle.checked) {
        blubStatus.innerText = "Blub is ON";
    } else {
        blubStatus.innerText = "Blub is OFF";
    }
});
