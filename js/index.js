const header__menu = document.querySelector(".header__menu");
const nav__menu = document.querySelector(".nav-menu");

header__menu.addEventListener("click", () => {
    nav__menu.classList.toggle("nav-menu--visible");
});
