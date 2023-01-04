let elems = document.querySelectorAll('.outer')
//Метод возвращает статический NodeList, содержащий все найденные элементы документа, которые соответствуют указанному селектору.

let btn = document.querySelector('.btn') // получили ссылку на кнопку с классом btn
let fl = true;
btn.addEventListener('click', () => {
  if (fl) {
  for (let i = 1; i < elems.length; i++) {
    if (i === (elems.length - 1)) {
        let pEl = document.createElement('p');
        pEl.innerText = 'End';
        elems[i].appendChild(pEl);
        continue;
      }
    let pEl = document.createElement('p');
    pEl.innerText = 'I am Groot';
    elems[i].appendChild(pEl);
    }
    fl = false;
  }
  })