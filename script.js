const sketchGrid = document.querySelector('#sketch-grid');

function setGridSize(size) {
  //set sketchGrid so it has the correct number of rows and columns
  sketchGrid.style.gridTemplate = '1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr 1fr';
  for (let i = 0; i < (size * size); i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    sketchGrid.appendChild(cell);
  }
};

setGridSize(5);