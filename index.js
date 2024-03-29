const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu__list");
const menuLink = document.querySelectorAll(".menu__link");

console.log(menuLink)

burger.addEventListener("click", () =>{
    menu.classList.toggle("displayed")
    menuList.classList.toggle("visible")
} );

menuLink.forEach( link => {
        link.addEventListener("click", () => {
            menu.classList.toggle("displayed")
            menuList.classList.toggle("visible")
        });
    }
)