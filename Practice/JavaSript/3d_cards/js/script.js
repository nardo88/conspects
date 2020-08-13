var cards = document.querySelectorAll('.card');


for (var i = 0; i < cards.length; i++) {

	cards[i].addEventListener('mousemove', rotateStart);
	cards[i].addEventListener('mouseout', rotateEnd);
}

function rotateStart(event) {
	var cardItem = this.querySelector('.card-item');
	var halfHeight = cardItem.offsetHeight / 2;
	var halfWidth = cardItem.offsetWidth / 2;
	cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 2 + 'deg)';

}

function rotateEnd(event) {
	var cardItem = this.querySelector('.card-item');
	cardItem.style.transform = 'rotate(0)';

}