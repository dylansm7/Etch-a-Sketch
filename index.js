const container = document.querySelector('.container');
const btnCreateGrid = document.querySelector('.btn-create-grid');
const btnClearGrid = document.querySelector('.btn-clear-grid');
const input = document.querySelector('.btn-create-grid');
const userValue = document.querySelector('.user-value');
const gridColor = document.querySelector('.grid-color');
const blackColor = document.querySelector('#black-colors');
const colorsCheckBox = document.querySelector('#colors');
const colors = ['#114B5F', '#F45B69', '#F5E960', '#55D6C2', '#B8336A', '#C490D1', '#6C9A8B', '#2E86AB', '#F5F749', '#F24236', '#53DD6C', '#F26419', '#00ABE7', '#1B3022', '#7261A3', '#FFB5C2', '#7E846B', '#DBF9B8'];

function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);
        gridSquare.style.width = 810 / gridSize + 'px';
        gridSquare.style.height = 800 / gridSize + 'px';
      }
};

function clearGrid() {
  container.innerHTML = '';
}


// Adds click action to the submt input
input.addEventListener('click', () => {
  clearGrid()
  let gridSize = Number(userValue.value);
  createGrid(gridSize);
});

// Uncheck colorsCheckBox if blackColor is checked
blackColor.addEventListener('change', () => {
  if (blackColor.checked) {
    colorsCheckBox.checked = false;
  }
});

// Uncheck blackColor if colorsCheckBox is checked
colorsCheckBox.addEventListener('change', () => {
  if (colorsCheckBox.checked) {
    blackColor.checked = false; 
  }
});

//makes the grid change its color depending on the check box
container.addEventListener('mouseover', (e) => {
  let randomNumber = Math.floor(Math.random() * colors.length);
  if(e.target.classList.contains('grid-square')){
    if (blackColor.checked){
      e.target.style.backgroundColor = 'black';
    }else if(colorsCheckBox.checked){
      e.target.style.backgroundColor = colors[randomNumber];
    }
  }
});