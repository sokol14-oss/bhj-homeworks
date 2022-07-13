window.onload = function() {
    'use strict';
const modalMain = document.getElementById("modal_main");
const close = Array.from(document.querySelectorAll(".modal__close"));
const succes = document.getElementsByClassName("show-success");
const modalSucces = document.getElementById("modal_success");
const elems = close.forEach(elem => elem);
modalMain.classList.add("modal_active");
succes.item(0).onclick = modal;
function modal() {
modalMain.classList.remove("modal_active");
modalSucces.classList.add("modal_active");
}
elems.onclick = function () {
 const parent = this.closest(".modal_active");
 parent.classList.remove("modal_active");
}
}
