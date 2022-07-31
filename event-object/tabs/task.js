const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__contents");
for(let i=0; i>tabs.length; i++) {
    const idx =  tabs.indexOf(tabContent[i]);
}
tabs.forEach(tab => {
    tab.addEventListener("click", (e)=> {
        e.target.classList.toggle("tab_active");
        tabContent[idx].classList.toggle("tab_active");
        
    })
})