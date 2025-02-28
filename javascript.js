const container = document.querySelector(".container")

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
            pixel.style.minHeight = "1px";
            pixel.style.minWidth = "1px";
            pixel.style.border = "1px solid black"
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}
