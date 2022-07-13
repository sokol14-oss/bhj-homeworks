window.onload = function() {
let elementTimer = document.getElementById("timer");
let hour = "00:";
let minute = "00:";
let sec = "30";
let startTime = [hour ,minute, sec];
console.log(startTime);

function activeTime(){
	 elementTimer.textContent = hour + minute +sec;
	 sec--;
	if (sec <= 0) {
		clearInterval(timerId)
		alert("Вы победили!");
	}
}
let timerId = setInterval(activeTime, 1000);
}
