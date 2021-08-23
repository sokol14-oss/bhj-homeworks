const next = document.querySelector(".slider__navigation. .slider__arrows .slider__arrow slider__arrow_next");
const prev = document.querySelector(".slider__navigation. .slider__arrows. slider__arrow slider__arrow_prev");
const images = document.querySelectorAll(".slider .slider__items .slider__item slider__item_active img");
next.onclick = function() {
	next[i].style.display = "none";
	i++;
	if( i >= images.length) {
		i = 0;
	}
	images[i].style.display = "block"
}
prev.onclick = function() {
	next[i].style.display = "none";
	i--;
	if( i < 0) {
		i = 0;
	}
	images[i].style.display = "block"
}