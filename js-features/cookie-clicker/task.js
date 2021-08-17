
const img = document.getElementById("cookie");
const elementClick = document.getElementById("clicker__counter");
const click = document.getElementById("click__counter");
function clicker() {
	elementClick.textContent++;
	return elementClick.textContent;
}
img.onclick = clicker;
function changeSize() {
	img.width = 100;
	img.height = 100;
}

img.onclick = changeSize;