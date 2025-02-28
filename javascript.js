const container = document.querySelector(".container");
const btn = document.querySelector("#gridSize");
const pixel = document.querySelectorAll(".pixel");
let mode = "default";
const modes = document.querySelector(".modes")
let pixelNumber = 20;

function generatePixels(number) {
    for (let i = 0; i < number; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
    
        if (number < 1 || number > 100) {
            alert("Use a positive number, smaller than 100")
            break;
        }
        
        for (let j = 0; j < number; j++) {    
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

generatePixels(20);

function changeGrid(number) {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {container.removeChild(row)});
    generatePixels(number);
    pixelNumber = number;
}

btn.addEventListener('click', () => {
    let gridSize = +prompt("How many squares per row?", " ");
    changeGrid(gridSize);
});

container.addEventListener('mouseover', (event) => {
    let targetPixel = event.target;
    targetPixel.classList.add("active");
})

modes.addEventListener('click', (event) => {
    let option = event.target;
    mode = option.id;
    console.log(mode);
})
