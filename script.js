const container = document.querySelector(".container");
const buttons = document.querySelector(".colorSelect");
container.innerHTML = "";

const gridSize = 16;
const squareSize = 512 / gridSize;

const customGridButton = document.querySelector(".gridButton");
customGridButton.addEventListener("click", () => {
  customGrid();
});

function customGrid() {
  let input = prompt("Enter any number between 16 and 100", "");
  if (isNaN(input) || input < 16 || input > 100) {
    return alert("please enter only numeric value between 16 and 100.");
  }

  let customGrid = parseInt(input);
  let customSquareSize = 512 / customGrid;
  container.innerHTML = "";
  layoutGenerate(customGrid, customSquareSize);
}

let divColor = "default";
const colorClasses = [
  "redColor",
  "greenColor",
  "blueColor",
  "yellowColor",
  "default",
];

buttons.addEventListener("click", (e) => {
  console.log(e.target.id);
  divColor = e.target.id;
});
function layoutGenerate(customGrid, customSquareSize) {
  let currentGrid;
  let currentSquareSize;

  if (customGrid) {
    currentGrid = customGrid;
  } else {
    currentGrid = gridSize;
  }
  if (customSquareSize) {
    currentSquareSize = customSquareSize;
  } else {
    currentSquareSize = squareSize;
  }

  for (let i = 0; i < currentGrid * currentGrid; i++) {
    const board = document.createElement("div");
    board.classList.add("square");
    board.classList.add("default");
    board.style.width = `${currentSquareSize}px`;
    board.style.height = `${currentSquareSize}px`;

    container.appendChild(board);

    board.addEventListener("mouseover", () => {
      if (divColor) {
        board.classList.remove(...colorClasses);
        board.classList.add(divColor);
      }
    });
  }
}

layoutGenerate();
// const red = ".redColor";
// const blue = ".blueColor";
// const yellow = ".yellowColor";
// const green = ".greenColor";
