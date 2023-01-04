// code here
//remove add!!!
// uncomment code below
let ul = document.querySelector('ul');
ul.querySelector('.first').innerText = "1";
ul.querySelector('.second').innerText = "2";
ul.querySelector('.third').innerText = "3";


let liLast = document.createElement('li');
liLast.className = "fourth";
liLast.innerHTML = 'Четвёртый';
ul.append(liLast);


let ol = document.querySelector('ol');
let last = ol.lastElementChild;
last.remove();

let olLiLast = document.createElement('li');
olLiLast.className = "new";
olLiLast.innerHTML = 'Новый';
ol.append(olLiLast);

