const next = document.querySelector("slider__arrow_next");
const prev = document.querySelector(".slider__arrow_prev");
const images = document.querySelectorAll("img");
next.onclick = function() {
	next[i].classList.remove("slider__item_active");
	i++;
	if( i >= images.length) {
		i = 0;
	}
	images[i].classList.add("slider__item_active");

}
prev.onclick = function() {
	next[i].classList.remove("slider__item_active");
	i--;
	if( i < 0) {
		i = 0;
	}
	images[i].classList.add("slider__item_active");

}