let box = document.createElement('div');
let container = document.querySelector('#container');
const btn = document.querySelector('#gridsize');
let grid = 24;

function createGrid() {
    for (let i = 0; i < (grid * grid); i++) {
        let newBox = box.cloneNode(true);
        container.appendChild(newBox);
        newBox.style.height = `${512 / grid}px`;
        newBox.style.width = `${512 / grid}px`;

        newBox.addEventListener('mouseenter', () => {
            newBox.classList.add('black');
        });
    }
}

createGrid();

btn.addEventListener('click', () => {
    let gridSize = +prompt('How big would you want the grid to be? 1-64');
    if (gridSize > 64) {
        gridSize = 64;
        alert('The max value is 64.');
    } else if (gridSize < 1) {
        gridSize = 1;
        alert('The min value is 1.');
    }
    grid = gridSize;
    container.innerHTML = '';
    createGrid();
});