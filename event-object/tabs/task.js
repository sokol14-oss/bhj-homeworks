const tabs = Array.from(document.querySelectorAll(".tab"));;
const tabContents = Array.from(document.querySelectorAll(".tab__content"));
for(let i=0; i<tabs.length;i++) {
    tabs[i].addEventListener("click",tab => {
     let idx = tabs.findIndex(elem => elem.classList.contains("tab_active"));
     tab.classList.remove("tab_active");
     tabContents[idx].classList.remove("tab__content_active");
     tab.target.classList.add("tab_active");
     tabContents[idx].classList.add("tab__content_active");
    })
}
