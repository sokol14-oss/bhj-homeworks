
const elementClick = document.getElementById("cookie");
const click = document.getElementById("clicker__counter");
const clickCounter  = document.getElementById("click__counter");
elementClick.onclick = () => {
	elementClick.width = 50;
	elementClick.height = 50;
	elementClick.onclick = null;
}
elementClick.onclick =()=> {
	click = click.textContent++;
}
elementClick.onclick= speedClick;
function speedClick() {
	const date = new Date();
	date = date.setMilliseconds(1);
	clickCounter.textContent =  1/date;
	elementClick.onclick = null;

}






