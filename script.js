const container = document.querySelector(".container");
const buttons = document.querySelector(".colorSelect");
container.innerHTML = "";

const gridSize = 16;
const squareSize = 512 / gridSize;

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

for (let i = 0; i < gridSize * gridSize; i++) {
  const board = document.createElement("div");
  board.classList.add("square");
  board.classList.add("default");
  board.style.width = `${squareSize}px`;
  board.style.height = `${squareSize}px`;

  container.appendChild(board);

  board.addEventListener("mouseover", () => {
    if (divColor) {
      board.classList.remove(...colorClasses);
      board.classList.add(divColor);
    }
  });
}

// const red = ".redColor";
// const blue = ".blueColor";
// const yellow = ".yellowColor";
// const green = ".greenColor";
