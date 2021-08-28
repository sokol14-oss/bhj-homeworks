window.onload = function() {
const modalMain = document.getElementById("modal_main");
const close = document.getElementsByClassName("modal__close");
const succes = document.getElementsByClassName("show-success");
const modalSucces = document.getElementById("modal_success");
modalMain.classList.add("modal_active");
close.item(0).onclick = function() {
    modalMain.classList.remove("modal_active");
}
succes.item(0).onclick = modal;
function modal() {
modalSucces.classList.add("modal_active");
}
}


