const div = document.querySelectorAll(".reveal");
function isVisible(div) {

    let coords = div.getBoundingClientRect();
    if(coords.top > window.innerHeight){
        div.classList.remove("reveal_active");
    }
    if(coords.bottom < 0){
        div.classList.remove("reveal_active");
    }
  div.classList.add("reveal_active");
  }
  window.addEventListener('scroll',isVisible);