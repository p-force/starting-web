let elem = document.querySelector('#jsstyle');
let button = document.createElement('button');

elem.addEventListener('click', () => {
    button.id = "jsstyled";
    button.innerText = "Styled";
    document.body.append(button);
    button.style.cssText = 
    ` color: white;
    background-color: green;
    font-size: 20px;`;
})

button.addEventListener('click', () => {
    elem.style.cssText = 
    ` color: black;
      background-color: white;
      font-size: 14px;`;
})


