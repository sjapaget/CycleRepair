/* const navButton = document.getElementById("nav-menu-button");
const nav = document.querySelector(".navbar");

navButton.onclick = function() {
   
    if (nav.style.display == "none") {
        navButton.classList.remove("fa-bars");
        navButton.classList.add("fa-xmark");
        nav.style.display = "flex";
    } else {
        navButton.classList.remove("fa-xmark");
        navButton.classList.add("fa-bars");
        nav.style.display = "none";
    }

};

*/
const navBar = document.querySelector(".navbar")
const navToggleButton = document.querySelector("#nav-menu-button");
const navOptions = document.querySelector("#nav-options");
const navHeader = document.querySelector("#navbar-header");
const navLogo = document.querySelector("#nav-logo");

let unclicked = true;

navToggleButton.onclick = function() {
    
    if (unclicked) {
        unclicked = false;
        navToggleButton.classList.remove("fa-bars");
        navToggleButton.classList.add("fa-xmark");
        navBar.style.backgroundColor = "#d6c6ad"
        navHeader.style.display = "none"
        navLogo.style.display = "none"
        navOptions.style.display = "flex";
    } else {
        unclicked = true;
        navToggleButton.classList.remove("fa-xmark");
        navToggleButton.classList.add("fa-bars");
        navBar.style.backgroundColor = "#EDE6DB"
        navHeader.style.display = "flex";
        navLogo.style.display = "flex";
        navOptions.style.display = "none";
    }
}