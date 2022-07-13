
const elem = Array.from(document.querySelectorAll(".hole"));
const win = document.getElementById("dead");
const lose = document.getElementById("lost");
function game (){
	const index = elem.forEach((i)=> {
		return i;
	})
if(index.classList.contains(".hole_has-mole")) {
win.textContent++;
} else{
	lose.textContent++;
}
if(win.textContent===10){
	alert ("Вы победили!");
	index.onclick =null;
}
if(lose.textContent===5){
alert ("Вы проиграли");
index.onclick =null;
	}

}
 elem.forEach((elem) => elem.onclick = game);



