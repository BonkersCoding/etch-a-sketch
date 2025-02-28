const container = document.querySelector(".container")
const btn = document.querySelector("#btn")

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

generatePixels(16);

function changeGrid(number) {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {container.removeChild(row)});
    generatePixels(number);
}

btn.addEventListener('click', () => {
    let gridSize = +prompt("How many squares per row?", " ");
    changeGrid(gridSize);
})
