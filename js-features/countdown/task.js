window.onload = function() {
const elementTimer = document.getElementById("timer");
let startTime = new Date(0,0,0,0,0,30,0);
startTime = startTime.toTimeString();
startTime = parseInt(startTime);
console.log(startTime);

function activeTime(){

	startTime= elementTimer;
	startTime.textContent--;
	if (startTime.textContent <= 0) {
		clearInterval(timerId)
		alert("Вы победили!");
	}
}
let timerId = setInterval(activeTime, 1000);
}
