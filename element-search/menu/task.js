window.onload = function() {
const links = (document.querySelectorAll(".menu__link");

links.forEach((link) => {
link.addEventListener("click",(event)=> {
	const parent = event.target.closest(".menu__item");
	const sub = parent.querySelectorAll(".menu_sub");
	sub.classList.toggle(".menu__active");
	if(event.target === link.event.currentTarget);
    return false;
})
}
)
}
