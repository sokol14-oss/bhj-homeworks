window.onload = function() {
const random = document.querySelector("hole_has-mole");
const elem = document.querySelectorAll(".hole");
let win = document.getElementById("dead");
let lose = document.getElementById("lost");
function getHole (index) {
		let holeClick = document.getElementById(`hole${index}`);
		return holeClick;
	}
	let hole = getHole (index);
	
for (let index = 1; index <= 9; index++) {
	hole.onclick = function() {
		if (hole.className.includes("hole_has-mole") === true) {
			dead++;
		} else {
			lost++;
		}

		if (dead.textContent === 10) {
			alert ("Вы победили!");
			dead = 0;
			lost = 0;
		} else if (lost.textContent === 5) {
			alert ("Вы проиграли");
			dead = 0;
			lost = 0;
			}
	}
}
