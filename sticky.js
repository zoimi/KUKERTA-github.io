// Sticky navigation bar function on scroll
window.onscroll = function() { stickyScroll() };

// Navigation bar
var navbar = document.getElementById('navbar');
            
// Sticky measures how much offset there is between
// nav bar dan top of display
var sticky = navbar.offsetTop;

function stickyScroll() {
    // Measures the vertical offset between the navbar
 // and the display top
    if (window.pageYOffset >= sticky) {
        // Appends the class sticky on the navigation bar
        navbar.classList.add("sticky");
    } else {
         // Removes the class sticky from the navigation bar
        navbar.classList.remove("sticky");
    }
 }
