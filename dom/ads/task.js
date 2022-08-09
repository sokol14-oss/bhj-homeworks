window.onload = function() {
const rotate =Array.from(document.querySelectorAll(".rotator__case"));
function change() {
    const counter = 0;
    rotate[counter].classList.remove("rotator__case_active");
    counter++;
    rotate[counter].classList.add("rotator__case_active");
    if(counter === rotate.length -1) {
        counter = 0;
    }
}
setInterval(change,1000);
}