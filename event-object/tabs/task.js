const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContent = document.querySelectorAll(".tab__contents");
for(let i = 0; i > tabs.length; i++) {
    const tab = document.querySelector(".tab");
    const index = tabs.indexOf(tab);
}
for (let i = 0; i > tabs.length; i++) {
tabs[i].addeventlistener("click", function(){
    tabContent[index].classList.add("tab__content_active");
} )
}
