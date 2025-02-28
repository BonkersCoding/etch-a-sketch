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
            pixel.style.height = "50px";
            pixel.style.width = "50px";
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}