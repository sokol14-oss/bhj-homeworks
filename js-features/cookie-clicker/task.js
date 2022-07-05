
const elementClick = document.getElementById("cookie");
const click = document.getElementById("clicker__counter");
const clickCounter  = document.getElementById("click__counter");



elementClick.onclick = function (){
	click.textContent++;
	const date = Date.now() / 1000;
	const now = (Date.now() / 1000) - date;
	const speed= click.textContent/now;
	clickCounter.textContent =  speed;
	elementClick.width = 50;
	elementClick.height = 50;
	elementClick.onclick = null;
}






