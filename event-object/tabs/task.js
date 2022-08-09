const tabs = Array.from(document.querySelectorAll(".tab"));;
const tabContent = Array.from(document.querySelectorAll(".tab__content"));
tabs.forEach(tab => {
    tab.addEventListener("click", (e)=> {
        let idx = tabs.findIndex(elem => elem.classList.contains("tab_active"));
        e.target.classList.add("tab_active");
        e.target.nextElementSibling.classList.remove("tab_active")
        e.target.previousElementSibling.classList.remove("tab_active");
        tabContent[idx].classList.remove("tab__content_active");
        tabContent[idx].classList.add("tab__content_active");
    })
})