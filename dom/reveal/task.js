const div = document.querySelectorAll(".reveal");
function isVisible() {

    let coords = div.getBoundingClientRect();
    if(coords.top > window.innerHeight){
        return false
    }
    if(coords.bottom < 0){
        return false
    }
  div.classList.add("reveal_active");
  }
  window.addEventListener('scroll',isVisible);

  