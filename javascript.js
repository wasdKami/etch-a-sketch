const gridContainer = document.querySelector(".gridContainer");
const inputContainer = document.querySelector(".inputContainer");
const cell = document.querySelectorAll(".cell");

const gridValue = document.querySelector(".gridValue");
const speedValue = document.querySelector(".speedValue");
const timeoutToggle = document.querySelector("#timeoutToggle")

let scaleInput = document.querySelector(".scaleInput");
let timeoutSpeed = 1000;
let currentColor = 'black';
let toggle = false;

gridValue.textContent = 0;
speedValue.textContent = timeoutSpeed;

let horizontal = 0;
let vertical = 0;

//---------------------------------------------------------------------------------------------
//Get input 

scaleInput.addEventListener('input', function () {
	// As a number
	scale = scaleInput.valueAsNumber;
    //console.log("vertical: " + vertical);
});

//---------------------------------------------------------------------------------------------
//when button is pressed create column and row

function submit(){
    let childElements = document.querySelectorAll(".column");
    for (let i = childElements.length - 1; i >= 0; i--) {
        gridContainer.removeChild(childElements[i]);
    }
    //console.log("horizontal and vertical Input: " + horizontal + " " + vertical);
    createGrid(scale);
    gridValue.textContent = scale;
}

function quickSubmit(value){
    let childElements = document.querySelectorAll(".column");
    for (let i = childElements.length - 1; i >= 0; i--) {
        gridContainer.removeChild(childElements[i]);
    }
    createGrid(value);
    gridValue.textContent = value;
}

//---------------------------------------------------------------------------------------------
// create column

function createGrid(cell){
    for(let i = 0; i < cell; i++){
        const column = document.createElement("div");
        column.classList.add('column');
        gridContainer.appendChild(column);

        for(let i = 0; i < cell; i++){
            const cell = document.createElement("div");
            cell.classList.add('cell');
            cell.style.backgroundColor = 'black';
            column.appendChild(cell);

            timeoutToggle.addEventListener('change', function () {
                if (timeoutToggle.checked == true) {
                    toggle = true;
                } else {
                    toggle = false;
                }
            });

            if(timeoutToggle.checked){
                cell.addEventListener('mouseenter', () => {                    
                    cell.style.backgroundColor = currentColor;
                });
            } else {
                cell.addEventListener('mouseenter', () => {                    
                    cell.style.backgroundColor = currentColor;
                    setTimeout(() => {
                        cell.style.backgroundColor = 'black';
                    }, timeoutSpeed);
                });
            }
        }
    }
}

//---------------------------------------------------------------------------------------------
// Choose random color

function randomColor(){
    const picks = ['yellow', 'red', 'orange', 'pink', 'blue', 'purple'];
    let choice = Math.floor(Math.random() * picks.length);
    return picks[choice];
}

function timeout(amount){
    timeoutSpeed = amount;
    console.log(timeoutSpeed)
    speedValue.textContent = timeoutSpeed;
}

function changeColor(color){
    currentColor = color
}
