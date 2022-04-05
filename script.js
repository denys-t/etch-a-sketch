let gridSize = 16;
let containerSize = 520;

const divContainer = document.querySelector("#container");
divContainer.style = `width: ${containerSize}px; height: ${containerSize}px; border: 1px solid;`;

const btnReset = document.querySelector("#reset");
btnReset.addEventListener('click', resetAll);

createGrid(gridSize);

function createGrid(size){
    let divSize = containerSize / gridSize;

    for (let i = 1; i <= (size*size); i++){
        const divNew = document.createElement('div');
        divNew.id = `div-${i}`;
        divNew.style = `display: inline-block; width: ${divSize}px; height: ${divSize}px;`;
        divNew.addEventListener('mouseover', addHover);
        divContainer.appendChild(divNew);
    }
}

/* const body = document.querySelector('body');
body.appendChild(divContainer); */

function addHover(){
    this.classList.add('div-hover');
}

function resetAll(){
    const pixels = document.querySelectorAll("#container div");
    pixels.forEach( (pixel) => {
        pixel.classList.remove("div-hover");
    });
}