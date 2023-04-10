const kits = ["crash","kick","snare","tom"];
const containerEl = document.querySelector(".container")

kits.forEach(kits =>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn")
    btnEl.innerText = kits
    btnEl.style.backgroundImage = "url(image/" + kits + ".png)"
    containerEl.appendChild(btnEl);
   const audioEl = document.createElement("audio")
   audioEl.src = "sounds/" + kits + ".mp3"
   containerEl.appendChild(audioEl)
   btnEl.addEventListener("click", () => {
    audioEl.play()
   })
   window.addEventListener("keydown", (event)=>{
    if(event.key === kits.slice(0,1)){
        audioEl.play()
        btnEl.style.transform = "scale(.9)"
    setTimeout(()=>{
    btnEl.style.transform = "scale(1)";
    },100)  
  }
   })
})