window.onload = function() {
let elementTimer = document.getElementById("timer");
let startTime = new Date();
startTime = startTime.setHours(0,0,30).toLocaleString("ru", { hour: '2-digit', minute: '2-digit', '2-digit'});

function activeTime(){

	elementTimer.textContent = startTime;
	elementTimer.textContent -=1;
	if (startTime <= 0) {
		clearInterval(timerId)
		alert("Вы победили!");
	}
}
let timerId = setInterval(activeTime, 1000);
}