// BURGER
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
  burger.classList.toggle("active");
});

// HEADER SCROLL

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});
