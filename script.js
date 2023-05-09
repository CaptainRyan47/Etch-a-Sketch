const sketchGrid = document.querySelector('#sketch-grid');
const eraser = document.querySelector('#eraser');
const sizeInput = document.querySelector('#size');
const sizeButton = document.querySelector('#size-button');

sizeInput.value = 16;
let eraserToggle = false;
setGridSize(16);



function setGridSize(size) {
  //set sketchGrid so it has the correct number of rows and columns
  sketchGrid.style.gridTemplate = 'repeat(' + size + ', 1fr) / repeat(' + size + ', 1fr)';

  let gridCells = document.querySelectorAll('.cell');
  if (gridCells.length > 0){
    gridCells.forEach(cell => {
      cell.remove();
    });
  };

  for (let i = 0; i < (size * size); i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    sketchGrid.appendChild(cell);
  }

  gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => {
    cell.addEventListener('mouseover', (mouseoverCell) => changeColor(mouseoverCell));
  });
};

function changeColor(mouse) {
  if (eraserToggle === false) {
    mouse.target.classList.add('black');
  }
  else mouse.target.classList.remove('black');
}

eraser.addEventListener('click', () => {
  if (eraserToggle === true) eraserToggle = false;
  else eraserToggle = true;
});

sizeButton.addEventListener('click', () => {
  if (sizeInput.value > 100) sizeInput.value = 100;
  if (sizeInput.value < 4) sizeInput.value = 4;
  gridCells = setGridSize(sizeInput.value);
});