document.addEventListener('DOMContentLoaded', () => {

})

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const header = document.querySelector(".header");

menu.style.top = header.clientHeight + "px";
burger.addEventListener("click", () => {
   if (burger.classList.contains("is-active")) {
       burger.classList.remove("is-active");
       menu.classList.remove("is-active");
       document.body.style.overflow = "";
   } else {
       burger.classList.add("is-active");
       menu.classList.add("is-active");
       document.body.style.overflow = "hidden";
   }
});