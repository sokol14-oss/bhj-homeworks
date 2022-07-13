window.onload = function() {
const links = document.querySelectorAll(".menu__link");
const sub = document.querySelectorAll(".menu_sub");
const elemSub = sub.forEach(element => {
	return element.closest("li .menu__link");
});
elemSub.onclick = function() {
console.log(this);
}
}
