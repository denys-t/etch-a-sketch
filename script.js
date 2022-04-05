let containerSize = 520;
const divContainer = document.querySelector("#container");
divContainer.style = `width: ${containerSize}px; height: ${containerSize}px; border: 1px solid;`;

const rangePixelSize = document.querySelector('#rangePixelSize');
let pixelSize = rangePixelSize.value;

const divSliderValue = document.querySelector('#sliderValue');
divSliderValue.textContent = pixelSize + " x " + pixelSize;

const colorPicker = document.querySelector("#colorPicker");
let pixelColor = '#7fff00';
colorPicker.addEventListener('change', function(){
    pixelColor = this.value;
});

rangePixelSize.addEventListener('input', function(){
    divSliderValue.textContent = this.value;
    divSliderValue.textContent += " x " + divSliderValue.textContent;
});

rangePixelSize.addEventListener('mouseup', function(){
    pixelSize = this.value;
    createGrid(pixelSize);
});

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
        divNew.addEventListener('mouseover', colorPixel);
        divContainer.appendChild(divNew);
    }
}

function colorPixel(){
    this.style.backgroundColor = pixelColor;
}

function clearAll(){
    const pixels = document.querySelectorAll("#container div");
    pixels.forEach( (pixel) => {
        pixel.style.backgroundColor = '#ffffff';
    });
}