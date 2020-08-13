let btn = document.querySelector('.btn');
let input = document.querySelector('.input');
let spis = document.querySelector('.spis');

btn.addEventListener('click', function(){
	let newLine = `
	<li>
	Вы ввели: ${input.value}
	</li>
	`;
	spis.innerHTML += newLine;
});