const big = document.querySelector(".font-size_big");
const small = document.querySelector(".font-size_small");
const font = document.querySelector(".font-size_active");
const book = document.querySelector(".book");
big.onclick = function(e) {
big.classList.remove("font-size_active");
small.classList.remove("font-size_active");
font.classList.remove("font-size_active");
e.target.classList.add("font-size_active");
book.classList.remove("book_fs-small");
book.classList.add("book_fs-big");
return false;
}
small.onclick = function(e) {
    big.classList.remove("font-size_active");
    small.classList.remove("font-size_active");
    font.classList.remove("font-size_active");
    e.target.classList.add("font-size_active");
    book.classList.remove("book_fs-big");
    book.classList.add("book_fs-small");
    return false;
    }

    font.onclick = function(e) {
        big.classList.remove("font-size_active");
        small.classList.remove("font-size_active");
        font.classList.remove("font-size_active");
        e.target.classList.add("font-size_active");
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
        return false;
        }


