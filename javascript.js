const container = document.querySelector(".container")

function generatePixels(number) {
    const square = number * number;
    for (let i = 0; i < square; i++) {    
        if (number < 1 || number > 100) {
            alert("Use a positive number, smaller than 100")
            break;
        }
        const pixel = document.createElement("div");
        pixel.style.height = "50px";
        pixel.style.width = "50px";
        container.appendChild(pixel);
    }
}