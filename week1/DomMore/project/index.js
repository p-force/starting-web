let box = document.querySelector('.box');
let colorInput = document.getElementById('color');
let changeColorButton = document.querySelector('.change-color');


/*Первое задание

// changeColorButton.addEventListener('click', function () {
//     let color = colorInput.value;
//     box.style.backgroundColor = color;
// });

// let placeInput = document.querySelector('input');
// let input = document.createElement('input');
// input.id = "very-important-message";
// placeInput.before(input);
// input.style.margin = '2px';

// changeColorButton.addEventListener('click', function () {
//     let text = input.value;
//     box.innerHTML = text;
// });

*/

//Второе задание

let button = document.querySelector('.change-color');
button.innerText = "Change";

let placeInput = document.querySelector('input');
let attributeInput = document.createElement('input');
attributeInput.id = "attribute";
placeInput.before(attributeInput);
attributeInput.style.margin = '2px';
colorInput.removeAttribute('list');
colorInput.id = "style";

changeColorButton.addEventListener('click', function () {
    let attributeText = attributeInput.value;
    let styleText = colorInput.value;
    box.style[attributeText] = styleText;
});
