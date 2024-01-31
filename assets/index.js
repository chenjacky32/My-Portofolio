// toogle class active
const navbar = document.querySelector(".navbar-nav");

// hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

//hilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});



