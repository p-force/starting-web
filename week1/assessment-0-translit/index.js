let inputSelector = document.querySelector('input');

let button = document.querySelector('button');
let boxWord = document.querySelector(".outputBoxWord");

let maxValue = 20;
let wordLen = 8;

let boxTranslit = document.querySelector('.outputBoxTranslit');
let docEl = document.documentElement;

button.addEventListener('click', function () {
    if (maxValue !== 0) {
        let inputText = inputSelector.value;
        {
            let spanEl = document.createElement('span');
            spanEl.setAttribute('class', 'neon-text');
            spanEl.innerHTML = inputText;
            if (inputText.length > wordLen) {
                spanEl.innerHTML = inputText.slice(0,wordLen) + "...";
                spanEl.setAttribute('title', inputText);
            }
            boxWord.appendChild(spanEl);
        }

        {
            let massRu = 'абвгдежзийклмнопрстуфхцъыьэюя';
            let massEn = "abvgdejziyklmnoprstufhc'y'eua";
            let spanElTranslit = document.createElement('span');
            spanElTranslit.setAttribute('class', 'neon-text');
            let inputTextTranslit = "";
            for (let i = 0; i < inputText.length; i++) {
                switch (inputText[i]) {
                    case 'ш': {
                        inputTextTranslit += 'sh';
                        break;
                    }
                    case 'ё': {
                        inputTextTranslit += 'yo';
                        break;
                    }
                    case 'щ': {
                        inputTextTranslit += 'sch';
                        break;
                    }
                    case 'ч': {
                        inputTextTranslit += 'ch';
                        break;
                    }
                    case ' ': {
                        inputTextTranslit += ' ';
                        break;
                    }
                    case '.': {
                        inputTextTranslit += '.';
                        break;
                    }
                    case '?': {
                        inputTextTranslit += '?';
                        break;
                    }
                    case '!': {
                        inputTextTranslit += '!';
                        break;
                    }
                    default: {
                        inputTextTranslit += (inputText.charCodeAt(i) >= 1040 && inputText.charCodeAt(i) <= 1071) ? massEn[massRu.indexOf(inputText[i].toLowerCase())].toUpperCase() : massEn[massRu.indexOf(inputText[i])];
                    }
                }
            }
            spanElTranslit.innerHTML = inputTextTranslit;
            if (inputTextTranslit.length > wordLen) {
                spanElTranslit.innerHTML = inputTextTranslit.slice(0,  wordLen) + "...";
                spanElTranslit.setAttribute('title', inputTextTranslit);
            }
            boxTranslit.appendChild(spanElTranslit);
        }
        maxValue--;
    }
    else {
        let allSpan = document.querySelectorAll('span');
        for (let i of allSpan)
            i.remove();
        maxValue = 20;
    }
});



