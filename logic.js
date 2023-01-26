const container = document.querySelector('.grid-container');
let rows = 16;
let cols = 16;
let paintColor = 'black';


//Grid Generator
const createGrid = () => {
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
  
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');

        cell.addEventListener('mousedown', function(event){
            event.target.style.backgroundColor = paintColor;
        });
    
        cell.addEventListener('mousemove', function(event){
            if(event.buttons === 1){
                event.target.style.backgroundColor = paintColor;
            }
        });
        
        row.appendChild(cell);
      }
  
      container.appendChild(row);
    }
  }
createGrid();


//Buttons
const whiteButton = document.querySelector('#white-button')
const blackButton = document.querySelector('#black-button')
const clearButton = document.querySelector('#clear-button')

blackButton.addEventListener('click', () => {
    paintColor = 'black'
});

whiteButton.addEventListener('click', () => {
    paintColor = 'white'
});

clearButton.addEventListener('click', () => {
    container.innerText = ""
    createGrid()
})


//Slider
const gridSizeSlider = document.querySelector('#grid-size');
const gridSizeValue = document.querySelector('.grid-size-value');

gridSizeSlider.addEventListener('input', (e) => {
    gridSizeValue.textContent = e.target.value;
    rows = e.target.value;
    cols = e.target.value;
    container.innerText = "";
    createGrid();
})



