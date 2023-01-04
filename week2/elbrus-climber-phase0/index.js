let mass = ['#one', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine', '#ten'];
let climber = document.querySelector('.climber');
let newClimber = document.createElement('img');
newClimber.setAttribute('src', 'img/climber.png');
newClimber.setAttribute('class', 'climber');
let place = document.querySelector(mass[1]);
		place.appendChild(newClimber);
document.addEventListener('keydown', function(event) {
	let i = 1;
	while (i < mass.length && i > 0)
	if (event.code == 'KeyX') {//next
	}
	if (event.code == 'KeyZ' && i > 1) {//prev
		let place = document.querySelector(mass[i - 1]);
		climber.before(place);
		i--;
	}
});