const boydEl = document.querySelector("body");
const colorNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
boydEl.addEventListener('click', function (event) {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px"
    spanEl.style.top = yPos + "px"
    const size = Math.random() * 100;
    spanEl.style.width = size + 'px';
    spanEl.style.height = size + 'px';
    spanEl.style.color =
        boydEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove()
    }, 4000)

    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorNum[getRandomNumber()]
    }
    spanEl.style.backgroundColor = color;
    spanEl.style.borderColor = color;

})
function getRandomNumber() {
    return Math.floor(Math.random() * colorNum.length)
}