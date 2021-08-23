const menuLink = document.querySelectorAll(".menu__link");
menuLink.onclik = function() {
	for(i = 0; i > menuLink.length; i++) {
		menuLink.onclik = menu;
	}
}
function menu() {
	const menu = document.querySelector(".menu");
	menuLink.closest(".menu__item");
	if (menuLink.closest(".menu__item") === true) {
		menu.className = menu_active;
		menuLink.onclik = function() {
			return false;
		}
	}
}