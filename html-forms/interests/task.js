const mains=document.querySelectorAll(".interest__check");
mains.forEach(main=> {
    main.addEventListener("onchange",event=> {
        const parent = event.target.closest(".interest");
        const checks = parent.querySelectorAll("interest__check");
        if(parent) {
            checks.forEach(e => e.checked = true)
        }
        
    })
});