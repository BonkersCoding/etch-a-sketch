const container = document.querySelector(".container");
const gridSize = document.querySelector("#gridSize");
const modes = document.querySelector(".modes");
const clear = document.querySelector("#clear");
let mode = "default";
let pixelNumber = 20;
let count = 0;
const defaultBtn = document.querySelector("#default");

function generatePixels(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {    
            const pixel = document.createElement("div");
            pixel.id = "pixel";
            row.appendChild(pixel);
        }
        container.appendChild(row); 
    }
}


function changeGrid(size) {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {container.removeChild(row)});
    generatePixels(size);
    pixelNumber = size;
}

function rainbowGenerator(step) {
    let colors = ['e81416', 'ffa500', 'FFFF00', '66ff00', '487de7', '4b369d', '70369d', 'FF00FF'];
    let j = step % 8;
    return colors[j];
}

container.addEventListener('mouseover', (event) => {
    let targetPixel = event.target;
    if (targetPixel.id === "pixel") {
        switch (mode) {
            case "default":
                targetPixel.style.backgroundColor = "black";
                break;
            case "rainbow":
                targetPixel.style.backgroundColor = '#' + rainbowGenerator(count);
                count++;
                break;
            case "darken":
                let values = getComputedStyle(targetPixel).getPropertyValue("background-color");
                if (values != 'rgb(0, 0, 0)') {
                    let bracketIndex = values.indexOf(')');
                    let opacity = +values.slice(14, bracketIndex);
                    opacity += 0.1;
                    targetPixel.style.backgroundColor = `rgb(0, 0, 0, ${opacity})`;
                }
            default:
                break;
        }
}
})

gridSize.addEventListener('click', () => {
    let gridSize = +prompt("How many squares per row?", " ");
    if (gridSize != NaN && gridSize > 0 && gridSize <= 100) {
        changeGrid(gridSize);
    } else {
        alert("Use a positive number, smaller than 100");
        }     
    
})

clear.addEventListener('click', () => {changeGrid(pixelNumber)});

modes.addEventListener('click', (event) => {
    let modeOptions = document.querySelectorAll(".mode");
    modeOptions.forEach((mode) => {mode.style.borderColor = "white"})
    let option = event.target;
    mode = option.id;
    changeGrid(pixelNumber);
    if (mode === "darken") {
        let pixels = document.querySelectorAll("#pixel");
        pixels.forEach((pixel) => {
            pixel.style.backgroundColor = 'rgb(0, 0, 0, 0)';
            });
    }
    option.style.borderColor = "#" + rainbowGenerator(count);
    count++;
    
})

generatePixels(20);
defaultBtn.click();
