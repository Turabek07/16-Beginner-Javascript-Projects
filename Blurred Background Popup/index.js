const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const PopupCOntainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");


btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active")
    PopupCOntainerEl.classList.remove("active")
})

closeIconEl.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    PopupCOntainerEl.classList.add("active");
})