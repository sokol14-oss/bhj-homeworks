const links = document.querySelectorAll(".menu__link");
links.forEach(element => {
	element.addEventListener("click",event => {
		event.preventDefault();
		const parent = event.target.closest(".menu__item");
		const sub = parent.querySelector(".menu_sub");
		sub.classList.toggle("menu_active");
	})

})

