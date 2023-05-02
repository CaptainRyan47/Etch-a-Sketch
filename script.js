const sketchGrid = document.querySelector('#sketch-grid');


function setGridSize(size) {
  //set sketchGrid so it has the correct number of rows and columns
  sketchGrid.style.gridTemplate = 'repeat(' + size + ', 1fr) / repeat(' + size + ', 1fr)';

  for (let i = 0; i < (size * size); i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    sketchGrid.appendChild(cell);
  }
};

function changeColor(mouse) {
  const cell = mouse.target.classList;
  cell.add('black');
}


setGridSize(16);
const gridCells = document.querySelectorAll('.cell');

gridCells.forEach(cell => {
  cell.addEventListener('mouseover', (mouseoverCell) => changeColor(mouseoverCell));
});