const headerToggle = document.querySelector(".header__toggle");
const headerNav = document.querySelector(".header__nav");

headerToggle.addEventListener("click", () => {
    headerToggle.classList.toggle("is-active");
    headerNav.classList.toggle("is-active");
});

const headerLinks = document.querySelectorAll(".header__nav a");

headerLinks.forEach(link => {
    link.addEventListener("click", () => {
        headerToggle.classList.remove("is-active");
        headerNav.classList.remove("is-active");
    });
});