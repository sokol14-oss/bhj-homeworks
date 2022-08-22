const tabs = Array.from(document.querySelectorAll(".tab"));;
const tabContents = Array.from(document.querySelectorAll(".tab__content"));
for(let i=0; i<tabs.length;i++) {
    tabs[i].addEventListener("click",e => {
    let idx = tabs.findIndex(elem => elem.classList.contains("tab_active"));
    tabs[0].classList.remove("tab_active");
    tabs[1].classList.remove("tab_active");
    tabs[2].classList.remove("tab_active");
    e.target.classList.add("tab_active");
     tabContents[0].classList.remove("tab__content_active");
     tabContents[1].classList.remove("tab__content_active");
     tabContents[2].classList.remove("tab__content_active");
     tabContents[idx].classList.add("tab__content_active");
    })
}
