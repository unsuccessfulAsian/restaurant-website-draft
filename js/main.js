const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

function setNavOpen(open) {
  navLinks.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}

navToggle.addEventListener("click", () => setNavOpen(!navLinks.classList.contains("open")));
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setNavOpen(false));
});
