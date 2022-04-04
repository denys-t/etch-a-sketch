const divContainer = document.createElement('div');
divContainer.id = "container";

for (let i = 1; i <= 16; i++){
    const divRow = document.createElement('div');
    divRow.id = `row-${i}`;

    for (let j = 1; j <= 16; j++){
        const divNew = document.createElement('div');
        divNew.id = `col-${i}`;
        divNew.textContent = " ";
        divNew.style = 'display: inline-block;';
        divNew.addEventListener('mouseover', addHover);
        divRow.appendChild(divNew);
    }

    divContainer.appendChild(divRow);
}

const body = document.querySelector('body');
body.appendChild(divContainer);

function addHover(){
    this.classList.add('div-hover');
}