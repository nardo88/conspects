let send_message = document.querySelector('.send_message');
let text_message = document.querySelector('#text_message');
let sender = document.querySelector('.sender');
let chat_content = document.querySelector('.chat_content');

let masseges = [];

if (localStorage.getItem('chat')){
	masseges = JSON.parse(localStorage.getItem('chat'));
	displayMessage();
}

send_message.addEventListener('click', function(){
	if (text_message.value == '' || sender.value == ''){
		alert('Заполните поля "Имя" или "Сообщение"');
	}
	else{
	var message = {
	name: sender.value,
	message_cont: text_message.value,
	};

	masseges.push(message);
	displayMessage();
	localStorage.setItem('chat', JSON.stringify(masseges));
	// localStorage.clear();
	}
	text_message.value = '';
});

function displayMessage() {
	let mess = '';
	masseges.forEach(function (item) {
		mess += `
		<li>
			<p class="name">${item.name}</p>
			<p class="message">${item.message_cont}</p>
		</li>
		`;
		chat_content.innerHTML = mess;
	})
}