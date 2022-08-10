const big = document.querySelector(".font-size_big");
const small = document.querySelector(".font-size_small");
const book = document.querySelector(".book");
big.onclick = function(e) {
!e.target.classList.remove("font-size_active");
e.target.classList.add("font-size_active");
book.classList.toggle("book_fs-big");
return false;
}
small.onclick = function(e) {
    !e.target.classList.remove("font-size_active");
    e.target.classList.add("font-size_active");
    book.classList.toggle("book_fs-small");
    return false;
    }


