const squareContainer = document.querySelector(".squareContainer");
const btnSetValue = document.querySelector(".btnSetValue");
const btnReset = document.querySelector(".btnReset");

let gridSize = 16
buildSquare(gridSize);

btnSetValue.addEventListener("click", () => {
    gridSize = Number(window.prompt("Set the grid number (max: 100)"));
    if (gridSize > 100) {
        alert("Maximum value is 100.");
        return;
    }
    resetSquare();
    buildSquare(gridSize);
});

btnReset.addEventListener("click", () => {
    resetSquare();
    buildSquare(gridSize);
});

function buildSquare(gridSize) {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            squareContainer.appendChild(square);
        }
    }

    const containerSize = 500;
    const squareSize = containerSize / gridSize;
    const squareList = document.querySelectorAll(".square");

    squareList.forEach(square => {
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
}

function resetSquare() {
    const squareList = document.querySelectorAll(".square");
    squareList.forEach(square => {
        square.remove();
    });
}

