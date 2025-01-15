const button = document.querySelector(".hamburger-button");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector("#navbar");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  sidebar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar--scrolled");
  } else {
    navbar.classList.remove("navbar--scrolled");
  }
});
