const div = Array.from(document.querySelectorAll(".reveal"));
function isVisible() {
    for (let i = 0 ; i < div.length; i++) {
    let coords = div[i].getBoundingClientRect();
    if(coords.top[i] > window.innerHeight){
        return false
    }
    if(coords.bottom[i] < 0){
        return false
    }
        div[i].classList.add("reveal_active");
}
}
 
    window.addEventListener('scroll', isVisible);

  