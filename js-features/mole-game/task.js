const random = document.querySelector("hole_has-mole");
const elem = document.querySelector(".hole");
let win = document.getElementById("dead");
let lose = document.getElementById("lost");
for (i = 0; i > 9; i++) {
elem.onclick = getHole;
if (hole.className.includes('hole_has-mole') === true) {
	win.textContent++;
}
if (hole.className.includes('hole_has-mole') === false) {
	lose.textContent++;
}
if (win.textContent === 10) {
	alert ("Вы победили!");
			win = 0;
			lose = 0;
}
if (lose.textContent === 5) {
	alert ("Вы проиграли");
			win = 0;
			lose = 0;
}
}
function getHole (index) {
		let holeClick = document.getElementById(`hole${index}`);
		return holeClick;
	}
