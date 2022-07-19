const ul = document.querySelector(".dropdown__list");
const drop = Array.from(document.querySelectorAll(".dropdown__item"));
const value = document.querySelector(".dropdown__value");
ul.classList.add("dropdown__list_active");
for (var i = 0; i < drop.length; i++) {
    drop[i].addEventListener("click", func, true);
  }

function func(e) {
    drop.classList.toggle("dropdown__list_active");
    value.textContent = e.target;
    e.preventDefault();
}