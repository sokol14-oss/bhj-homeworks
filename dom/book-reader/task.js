const big = document.querySelector(".font-size_big");
const small = document.querySelector(".font-size_small");
const book = document.querySelector(".book");
big.onclick = function(e) {
e.target.classlist.toggle("font-size_active");
book.classList.toggle(".font-size_active");
return false;
}
small.onclick = function(e) {
    e.target.classlist.toggle("font-size_active");
    book.classList.toggle(".font-size_active");
    return false;
    }