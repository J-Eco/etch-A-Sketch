let grid = 16;

function createCanvas(num) {
    const container = document.querySelector('.container');
    if (document.querySelector('.newDiv')) {
        rmOldCanvas();
    }
    for (let i = 0; i < (grid * grid); i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'newDiv');

        container.appendChild(div);
    }

    if (document.querySelector('.newDiv')) {
        const divGrid = document.querySelectorAll('.newDiv');
        console.log(divGrid.length);
        divGrid.forEach((element) => {
            element.addEventListener('mouseover', () => {
                boostOpacity(element);
            })
        })
    }
    
}

window.addEventListener('DOMContentLoaded', createCanvas());


function boostOpacity(ele) {
    ele.style.backgroundColor = 'rgba(0, 255, 180)';
    if (ele.style.opacity <= 1) {
        ele.style.opacity = +ele.style.opacity + 0.1;
    }
}

function rmOldCanvas() {
    let getDivList = document.querySelectorAll('.container > .newDiv')
    getDivList.forEach((element) => {
        element.remove();
    })
}

const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    const response = prompt("Num of Squares per side?", "Max Number of 100");
    if (response !== '' && typeof Number(response) === 'number' && response <= 100 && response > 0) {
        grid = parseFloat(response);
        createCanvas(grid);
    }
    else {
        alert('Input must be a number: 0 - 100.');
    }
})