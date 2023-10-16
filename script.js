// Function to open and focus popup window
function openPopup() {
    var popup = document.getElementById("popup-container");
    popup.style.display = "inline-block";
    popup.focus();
    var dimContent = document.querySelector("main");
    dimContent.style.opacity = 0.4;
}

// Function to close popup window
function closePopup() {
    var popup = document.getElementById("popup-container");
    popup.style.display = "none";
    var dimContent = document.querySelector("main");
    dimContent.style.opacity = 1;
}

// Eventlistener to open the popup
document.getElementById("open-button").addEventListener("click", openPopup);

// Eventlistener to close the popup
document.getElementById("close-button").addEventListener("mouseup", closePopup);