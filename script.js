function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
        document.getElementById("icon").innerHTML = "X";
    } else {
        navbar.className = "navbar";
        document.getElementById("icon").innerHTML = "&#9776;";
    }
}