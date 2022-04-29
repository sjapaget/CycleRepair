
const navToggleButton = document.querySelector("#nav-menu-button");
const navOptions = document.querySelector("#nav-options");
const navHeader = document.querySelector("#navbar-header");
const navLogo = document.querySelector("#nav-logo");

let unclicked = true;

navToggleButton.onclick = function() {
    
    if (unclicked) {
        unclicked = false;
        navHeader.style.display = "none"
        navLogo.style.display = "none"
        navOptions.style.display = "flex";
    } else {
        unclicked = true;
        navHeader.style.display = "flex";
        navLogo.style.display = "flex";
        navOptions.style.display = "none";
    }
}