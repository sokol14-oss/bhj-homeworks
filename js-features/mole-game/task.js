
const random = document.querySelector("hole_has-mole");
const elem = document.querySelectorAll(".hole");
const win = document.getElementById("dead");
const lose = document.getElementById("lost");
function getHole(index) {
	const holeId = document.getElementById(`hole${index}`);
	return holeId;
}
const hole = getHole(index);

function game (){
	for( let i =0; i >9;i++) {
if(hole.className = "hole_has-mole") {
win.textContent++;
} else{
	lose.textContent++;
}
if(win.textContent===10){
	alert ("Вы победили!");
	hole.onclick =null;
}
if(lose.textContent===5){
alert ("Вы проиграли");
hole.onclick =null;
	}
}
}
hole.onclick = game;