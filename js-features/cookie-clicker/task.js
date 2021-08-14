
const img = document.getElementById("cookie");
const elementClick = document.getElementById("clicker__counter");
const click = document.getElementById("click__counter");
function changeSizes() {
	img.width = 100;
	img.height = 100;
}

 function clickCount() {
 	img.onclick = function() {
 	let sum = elementClick.textContent++;	
 	}
	const time = setMilliseconds(1000);
	img.onclick = function() {
	 let midSpeed = sum / time;
	 click.textContent = midSpeed;
	}
	setTimeout(clean, 1000);
	return midSpeed;
}
function elementClick() {

	elementClick++;
	return elementClick;
}
function clean() {
	img.onclick = null;
}
function mainClick() {
elementClick();
changeSizes();
clickCount();
}
img.onclick = mainClick;

