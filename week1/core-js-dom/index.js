let placeLi = document.querySelectorAll('li');

for (let i of placeLi) {
    button = document.createElement('button');
    button.innerHTML = "Купить";
    button.style.marginBottom = "15px";
    i.appendChild(button);
}

let placeButton = document.querySelectorAll('button');

for (let i = 0; i < placeButton.length; i++) {
    placeButton[i].addEventListener("click", () => {
        let span = placeLi[i].querySelector('span');
        let name = span.innerText;
        alert(`Вы хотите купить: ${name}`);
    });
}
