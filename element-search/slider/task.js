
const next = document.querySelector(".slider__arrow_next");
const prev = document.querySelector(".slider__arrow_prev");
const items = Array.from(document.querySelectorAll(".slider__item"));
const activeSlider= document.querySelector(".slider__item_active");
next.onclick = function(){
	let idx=  items.findIndex(elem => elem.classList.contains("slider__item_active"));
	items[idx].classList.toggle("slider__item_active");
	idx++;
	if( idx >= items.length) {
		idx = 0;
	}
}
prev.onclick = function(){
	let idx=  items.findIndex(elem => elem.classList.contains("slider__item_active"));
	items[idx].classList.toggle(idx);
	idx--;
	if( idx < 0) {
		idx = 0;
	}
}
