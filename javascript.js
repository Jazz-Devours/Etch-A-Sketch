const container = document.querySelector('#container');
const button = document.querySelector('.btn');
let grid = 16;
button.addEventListener('click', () => {
  grid = prompt("How many grids will be on each side? (max 100)", 16);
  if (grid == NaN) return;
  if (grid > 100) {
    grid = 100;
  }
  removeGrid();
  generateGrid(grid);
})

function changeColor(e) {
  e.target.classList.add('highlight');
}

function removeGrid() {
  container.replaceChildren();
}

function generateGrid(gridSize) {
  for (let y = 0; y < gridSize; y++) {
    const divx = document.createElement('div');
    divx.classList.add('boxX');
    container.appendChild(divx);
    for (let x = 0; x < gridSize; x++) {
    const divy = document.createElement('div');
    divy.classList.add('boxY');
    divy.addEventListener('mouseover', changeColor);
      divx.appendChild(divy)
    }
  }
}

generateGrid(grid);