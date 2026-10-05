// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
}

toggle.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

// Close the menu after tapping a link
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
