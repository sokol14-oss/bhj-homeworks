
const elementClick = document.getElementById("cookie");
const click = document.getElementById("clicker__counter");
const clickCounter  = document.getElementById("click__counter");

elementClick.onclick = () =>{
	click.textContent++;
	const now = (Date.now() / 1000) - date;
	clickCounter.textContent = click.textContent / now;
	if(click.textContent %2 !=0) {
	elementClick.width = 50;
	elementClick.height = 50;
	}
	else{
		elementClick.width = 100;
		elementClick.height = 100;	
	}
	if(now> 1000){
		elementClick.onclick = null;
	}
}
const date = Date.now() / 1000;
console.log(now);





