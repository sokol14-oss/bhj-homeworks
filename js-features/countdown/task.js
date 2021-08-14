
const time = function() {
const elementTimer = document.getElementById("timer");
elementTimer.textContent--;
}
setInterval(time, 1000);
if (time === 0) {
	alert("«Вы победили в конкурсе!»");
	clearInterval(time);

