
const elem = Array.from(document.querySelectorAll(".hole"));
const win = document.getElementById("dead");
const lose = document.getElementById("lost");
function game (event){
if(event.target.classList.contains("hole_has-mole")) {
win.textContent++;
} else {
lose.textContent++;
}
if(win.textContent==10){
alert ("Вы победили!");
win.textContent=0;
lose.textContent=0;
}
if(lose.textContent==5){
alert ("Вы проиграли");
win.textContent=0;
lose.textContent=0;
}
}
 elem.forEach((e) => e.onclick = game);


