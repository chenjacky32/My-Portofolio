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

//scroll reveal
ScrollReveal({ reset: true, distance: "50px", duration: 2000, delay: 300 });

ScrollReveal().reveal(".hero-content,h4", { origin: "top" });
ScrollReveal().reveal("#gambar1,.about-me-pict,.about-content,.map", { origin: "bottom" });
ScrollReveal().reveal(".projects-pict", { origin: "left" });
