for (let i = 0; i < 256; i++) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.setAttribute('class', 'newDiv');
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

function boostOpacity(ele) {
    ele.style.backgroundColor = 'rgba(0, 255, 180)';
    if (ele.style.opacity <= 0.9) {
        ele.style.opacity = +ele.style.opacity + 0.1;
    }
}

const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    const response = prompt("Num of Squares per side?")
    container.remove();
})