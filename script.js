const rangePixelSize = document.querySelector('#rangePixelSize');
let pixelSize = rangePixelSize.value;
let containerSize = 520;


const divSliderValue = document.querySelector('#sliderValue');
divSliderValue.textContent = pixelSize + " x " + pixelSize;

rangePixelSize.addEventListener('input', function(){
    divSliderValue.textContent = this.value;
    divSliderValue.textContent += " x " + divSliderValue.textContent;
});

rangePixelSize.addEventListener('mouseup', function(){
    pixelSize = this.value;
    createGrid(pixelSize);
});

const divContainer = document.querySelector("#container");
divContainer.style = `width: ${containerSize}px; height: ${containerSize}px; border: 1px solid;`;

const btnClear = document.querySelector("#clear");
btnClear.addEventListener('click', clearAll);

createGrid(pixelSize);

function createGrid(size){
    if (document.querySelector('#div-1') != null ) {
        const allPixels = document.querySelectorAll('#container div');
        allPixels.forEach((pixel) => {
            pixel.remove();
        });
    }

    let divSize = containerSize / pixelSize;

    for (let i = 1; i <= (size*size); i++){
        const divNew = document.createElement('div');
        divNew.id = `div-${i}`;
        divNew.style = `display: inline-block; width: ${divSize}px; height: ${divSize}px;`;
        divNew.addEventListener('mouseover', addHover);
        divContainer.appendChild(divNew);
    }
}

function addHover(){
    this.classList.add('div-hover');
}

function clearAll(){
    const pixels = document.querySelectorAll("#container div");
    pixels.forEach( (pixel) => {
        pixel.classList.remove("div-hover");
    });
}