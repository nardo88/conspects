<?php



    // открываем сессию
    session_start();
    // устанавливаем срок жизни сессии
    ini_set('session.gc.maxlifetime', 3600);
    // устанавливаем соединение к БД где хранятся логины и пароли
    // всех зарегистрирвоанных пользователей
    $connection = new PDO ('mysql:host=localhost; dbname=glo_php; charset=utf8', 'root', '');
    // с помощью SQL запроса получаем всех пользователей из таблицы users
    $login = $connection->query('SELECT * FROM `users`');
    // если в глобальном объекте $_POST есть свойство - login
    if ($_POST['login']){
        // запускаем перебор массива с пользователями
        foreach ($login as $log) {
            // если совпадение данных найдено
            if ($_POST['login'] == $log['login'] && $_POST['password'] == $log['password']){
                // мы в сессию записываем логин и пароль пользователя
                $_SESSION['login'] = $_POST['login'];
                $_SESSION['password'] = $_POST['password'];
                // после чего редиректим на страницу с закрытым контентом
                header('location: content.php');
            }
        }
        // если совпадений не найдется, т.е. редирект не произойдет, то отрисовываем 
        // "Неверный логин или пароль"
        echo "Неверный логин или пароль";
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        form{
            margin-top: 30px;
            width: 300px;
            display: flex;
            flex-direction: column;
        }
        input{
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    


    <form action="" method="POST">
        <input type="text" name="login" required>
        <input type="text" name="password" required>
        <button>OK</button>
    </form>

</body>
</html>

