let grid = 256;

function createCanvas(num) {
    const container = document.querySelector('.container');
    if (document.querySelector('.newDiv')) {
        rmOldCanvas();
    }
    for (let i = 0; i < grid; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'newDiv');
        console.log(div.length);
        container.appendChild(div);
    }

    if (document.querySelector('.newDiv')) {
        const divGrid = document.querySelectorAll('.newDiv');
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
    if (ele.style.opacity <= 0.9) {
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
    grid = parseFloat(response);
    createCanvas(grid);
})