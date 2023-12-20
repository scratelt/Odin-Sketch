




function createGrid(size) {
    const totalSquares = size * size;

    const container = document.querySelector('.container');
    const columns = size;
    container.style.setProperty('--columns', columns);

    container.innerHTML = '';

    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid';

    for (let i = 0; i < totalSquares; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener('mouseover', function () {
            const colorInput = document.querySelector('.color');
            gridItem.style.backgroundColor = colorInput.value;
        });
    }

    container.appendChild(gridContainer);
}


function updateGridSize(value) {
    const gridSizeLabel = document.getElementById('rangeValue');
    gridSizeLabel.innerText = value;
    createGrid(value);
}

createGrid(30);


const resetButton = document.querySelector('.btn');
resetButton.addEventListener('click', function () {
    const defaultSize = 30;
    document.querySelector('.slider input').value = defaultSize;
    updateGridSize(defaultSize);
});
