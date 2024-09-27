function loadHTML(file, elementId, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback(); // Run the callback after loading HTML
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load navbar and footer
loadHTML('Navbar.html', 'navbar', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav ul");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    } else {
        console.error("Hamburger or nav elements not found in the DOM.");
    }
});
