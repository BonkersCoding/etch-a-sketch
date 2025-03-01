const container = document.querySelector(".container");
const btn = document.querySelector("#gridSize");
const modes = document.querySelector(".modes");
const clear = document.querySelector("#clear");
let mode = "default";
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
            pixel.id = "pixel";
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}


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
    if (targetPixel.id === "pixel") {
        switch (mode) {
            case "default":
                targetPixel.style.backgroundColor = "black";
                break;
            case "rainbow":
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                targetPixel.style.backgroundColor = "#" + randomColor;
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

clear.addEventListener('click', () => {changeGrid(pixelNumber)});

modes.addEventListener('click', (event) => {
    let option = event.target;
    mode = option.id;
    changeGrid(pixelNumber);
    if (mode === "darken") {
        let pixels = document.querySelectorAll("#pixel");
        pixels.forEach((pixel) => {
            pixel.style.backgroundColor = 'rgb(0, 0, 0, 0)';
            });
    }
})

generatePixels(20);
