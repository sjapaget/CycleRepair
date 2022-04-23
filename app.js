const navButton = document.getElementById("nav-menu-button");
const nav = document.querySelector("nav");







navButton.onclick = function() {
   
    if (nav.style.display == "none") {
        navButton.classList.remove("fa-bars");
        navButton.classList.add("fa-xmark");
        nav.style.display = "block";
    } else {
        navButton.classList.remove("fa-xmark");
        navButton.classList.add("fa-bars");
        nav.style.display = "none";
    }

};