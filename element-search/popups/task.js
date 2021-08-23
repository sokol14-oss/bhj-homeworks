window.onload = function() {
const modal = document.getElementsClassName("modal");
const close = document.getElementsByClassName("modal__close");
const succes = document.getElementsByClassName("show-success");
const modalSucces = document.getElementById("modal_success");
modal.className = modal_active;
close.onclick = function() {
modal = null;
}
succes.onclick = function() {
	return modalSucces;
}
}
