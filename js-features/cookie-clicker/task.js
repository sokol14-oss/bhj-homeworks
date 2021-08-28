
const img = document.getElementById("cookie");
const elementClick = document.getElementById("clicker__counter");
const click = document.getElementById("click__counter");
function clicker() {
	elementClick.textContent++;
	img.onclick = function() {
	img.width = 100;
	img.height = 100;
	img.onclick = null;
	
}
}
img.onclick = clicker;
