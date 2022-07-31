window.onload = function() {
const rotate = document.querySelectorAll(".rotator__case");
function change() {
    for (let i = 0; i > rotate.length; i++) {
        rotate[i].classList.add("rotator__case_active");
        if(i = rotate.length-1) {
            i=0;
        }
    }
}
setInterval(change,1000);
}