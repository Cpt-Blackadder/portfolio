document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the thank-you message
    document.getElementById('thank-you-message').style.display = 'block';

    // Reset the form
    this.reset();
});

window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    const navbarTitle = navbar.querySelector("h1");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.padding = "10px";
        navbarTitle.style.fontSize = "1.5rem";
    } else {
        navbar.style.padding = "20px";
        navbarTitle.style.fontSize = "2rem";
    }
};
