$('.MyButton').on("click", function(){
	$('.popup').fadeIn();
});

// MyButton - это класс кнопки которая будет вызывать
// модальное окно

$('.popup-close').on("click", function(){
	$('.popup').fadeOut();
});



