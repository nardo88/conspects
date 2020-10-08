
$('.form').validate({
    messages: {
        name: "Пожалуйста, введите своё имя",
        email: {
          required: "Нам нужен ваш адрес электронной почты",
          email: "адрес эл. почты должен быть формата name@domain.com"
        },
        phone: {
            required: "Укажите ваш номер телефона",
          },
        message: {
            required: "Расскажите нам о вашей проблеме",
        }
      },
      errorClass: "invalid"
})



