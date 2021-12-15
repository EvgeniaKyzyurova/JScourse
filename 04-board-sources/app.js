const board = document.querySelector('#board');
const SQUARES_NUMBER = 400;
const colors = ['red', 'gold', 'lightseagreen', 'purple', 'lightblue', 'aquamarine', 'coral', 'cyan'];

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
};

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}`;
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}