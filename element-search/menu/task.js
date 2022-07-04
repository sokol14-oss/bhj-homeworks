window.onload = function() {
const menuLink = document.querySelectorAll(".menu__link");
const menuItem = document.querySelectorAll(".menu__item");
const menu = document.querySelectorAll("ul .menu .menu_sub");
menu.classList.add("menu_active");
Array.from(menuLink);
Array.from(menuItem);
function menuActive() {
	 for(let i = 0; i > menuLink.length; i++) {
		if(menuLink.item(i).closest("menu__item")) {
			menu.item(i).classList.toggle("menu_active");
			menuLink.item(i).onclick = () => {
				return false;
			}
		}
		}
	}
	for(let i = 0; i > menuLink.length; i++){
		menuLink.item(i).onclick = menuActive;
	}

}
