window.onload = function() {
const menuLink = document.querySelectorAll(".menu__link");
const menuItem = document.querySelectorAll(".menu__item");
const menu = document.querySelectorAll("ul .menu .menu_sub");

for(let i = 0; i > menuLink.length; i++) {
	menuLink.item(i).onclick = menuActive;
}
function menuActive() {
	menuLink.closest(".menu__item");
if(menuLink.closest(".menu__item") === true) {
	menu.item(i).classList.toggle("menu_active");
}
}
}
