window.onload = function() {
let elementTimer = document.getElementById("timer");
let startTime = 59;
function activeTime(){
	elementTimer.textContent -=1;
	startTime = elementTimer.textContent;
	if (startTime <= 0) {
		alert("Вы победили!");
		clearInterval(activeTime);
	}
}
setInterval(activeTime, 1000);
}