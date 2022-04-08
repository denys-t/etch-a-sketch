const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
let containerSize = Math.floor(4*vh/5);
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

const selectMode = document.querySelector('#mode');
selectMode.addEventListener('change', changeDrawingMode);

let mouseDown = false;
const body = document.querySelector("body");
body.addEventListener('mousedown', () => {
    mouseDown = true;
});
body.addEventListener('mouseup', () => {
    mouseDown = false;
});

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
        divNew.addEventListener('mousedown', colorPixel);
        divNew.addEventListener('mouseover', colorPixel);
        divContainer.appendChild(divNew);
    }
}

function colorPixel(e){
    if (e.type === 'mouseover' && !mouseDown) return;
    if (selectMode.value == 'rainbow') pixelColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = pixelColor;
}

function clearAll(){
    const pixels = document.querySelectorAll("#container div");
    pixels.forEach( (pixel) => {
        pixel.style.backgroundColor = '#ffffff';
    });
}

function changeDrawingMode(){
    switch (this.value) {
        case 'color':
            colorPicker.removeAttribute('hidden');
            pixelColor = colorPicker.value;
            break;
        case 'rainbow':
            colorPicker.setAttribute('hidden', true);
            break;
        case 'eraser':
            colorPicker.setAttribute('hidden', true);
            pixelColor = '#ffffff';
            break;
    }
}