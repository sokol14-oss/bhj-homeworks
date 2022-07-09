window.onload = function() {
const modalMain = document.getElementById("modal_main");
const close = document.querySelector("div.modal__close");
const succes = document.getElementsByClassName("show-success");
const modalSucces = document.getElementById("modal_success");
modalMain.classList.add("modal_active");
succes.item(0).onclick = modal;
function modal() {
modalMain.classList.remove("modal_active");
modalSucces.classList.add("modal_active");
}
close.onclick = function () {
    if(modalMain.classList.contains("modal_active")) {
        modalMain.classList.remove("modal_active");
    }
    if(modalSucces.classList.contains("modal_active")){
        modalSucces.classList.remove("modal_active");
    }
}
console.log(close);
}
