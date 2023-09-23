const gridContainer = document.querySelector(".gridContainer");
let horizontalInput = document.querySelector(".horizontalInput");
let verticalInput = document.querySelector(".verticalInput");

let horizontal;
let vertical;

horizontalInput.addEventListener('input', function () {
	// As a number
	horizontal = horizontalInput.valueAsNumber;
    console.log("horizontal: " + horizontal);
});

verticalInput.addEventListener('input', function () {
	// As a number
	vertical = verticalInput.valueAsNumber;
    console.log("vertical: " + vertical);
});


function submit(){
    console.log("horizontal and vertical Input: " + horizontal + " " + vertical);
    createGrid(horizontal, vertical);
}

function createGrid(width, height){
    let childElements = document.querySelectorAll(".gridCell");
    for (let i = childElements.length - 1; i >= 0; i--) {
        gridContainer.removeChild(childElements[i]);
    }
    
    let cellAmount = width * height;
    console.log(cellAmount);
    for(let i = 0; i < cellAmount; i++){
        const gridCell = document.createElement('div');

        gridCell.classList.add('gridCell');
        gridCell.style.width = '100px';
        gridCell.style.height = '100px';
        gridCell.style.backgroundColor = randomColor();

        gridContainer.appendChild(gridCell);
    }
}

function randomColor(){
    const picks = ['yellow', 'red', 'orange', 'pink', 'blue', 'purple'];
    let choice = Math.floor(Math.random() * picks.length);
    return picks[choice];
}
