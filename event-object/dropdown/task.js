const ul = document.querySelector(".dropdown__list");
const drops = Array.from(document.querySelectorAll(".dropdown__item"));
const value = document.querySelector(".dropdown__value");
value.addEventListener("click", func, true);
drops.forEach(drop => {
	drop.addEventListener("click",event => {
		event.preventDefault();
    ul.classList.toggle("dropdown__list_active");
    value.textContent = event.target.textContent;
  })})

function func(e) {
  ul.classList.toggle("dropdown__list_active");
    e.preventDefault();
}
