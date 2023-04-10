const imageContainerEl = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click",()=>{
     iamgeNum = 10
    addNewImages();
})

function addNewImages(){
    for (let index = 0; index < iamgeNum; index++) {
        const newImgEl = document.createElement("img")
        newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 2000
        )}`;
        imageContainerEl.appendChild(newImgEl);
        
    }
    
}