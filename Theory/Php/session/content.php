<?php

    // открываем сессию
    session_start();
    // если в сессии НЕ хранятся свойства логина и пароля
    if (!$_SESSION['login'] || !$_SESSION['password']){
        // то выполняем редирект на страницу с авторизацией
        header('location: index.php');
        // die - это команда окончания скрипта, что бы на всякий
        // случай какой-то участок скрипта вдруг не отработал
        die();
    }

    if ($_POST['unlogin']){
        // уничтожаем сессию
        session_destroy();
        // и выполняем редирект
        header('location: index.php');

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
            display: flex;
            flex-direction: column;
        }
    </style>
</head>
<body>
    <h1>Страница для авторизованного пользователя</h1>

    
    <?= "Привет, " . $_SESSION['login'] . '<br>';?>

    <form action="" method="POST">
        <input style="width: 250px" type="submit" value="Выйти" name="unlogin">
    </form>
</body>
</html>