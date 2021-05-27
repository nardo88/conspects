<?php

// подключаемся к БД
$connection = new PDO ('mysql:host=localhost; dbname=lesson_php; charset=utf8', 'root', '');
// isset — Определяет, была ли создана переменная и установлена значением отличным от NULL
if (isset($_POST['submit'])){
    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileType = $_FILES['file']['type'];
    $fileError = $_FILES['file']['error'];
    $fileSize = $_FILES['file']['size'];

    // теперь нужно понять с каким расширением пришел к нам файл
    // функция explode превращает строку в массив (аналог split из JS)
    // функция end возвращает последний элемент массива
    // приводит строку к нижнему регистру
    $fileExtansion = strtolower(end(explode('.', $fileName)));
    // перезапишем имя файла буз расширения
    $fileName = explode('.', $fileName)[0];
    // c помощью регулярного выраджения избавимся от цифр в имени файла что бы не было типа file0001.jpg
    $fileName = preg_replace('/[0-9]/', '', $fileName);
    // создаем массив с допустимыми расширениями
    $allowedExtansion = ['jpg', 'png', 'jpeg'];
    // проверяем соответствует ли наше расширение файла данным массива допустимых расширений
    if (in_array($fileExtansion, $allowedExtansion)){
        // проверяем максимальное значение размера файла (размер в байтах - 5000000 = 5мб)
        if ($fileSize < 5000000){
            // проверяем на наличие ошибок
            if ($fileError === 0){
                // запишем в БД имя и расширение файла
                $connection->query("INSERT INTO `images` (`imagename`, `extension`) VALUES ('$fileName', '$fileExtansion')");
                // теперь получим id последней загруженной картинки в БД
                $lastID = $connection->query("SELECT MAX(id) FROM `images`");
                // переведем значение в удобочитаемый массив
                $lastID = $lastID->fetchAll();
                // получаем значение
                $lastID = $lastID[0][0];
                // В ПАПКЕ С ПРОЕКТОМ ДОЛЖНА БЫТЬ СОЗДАНА ПАПКА "uploads"
                // теперь создадим новое имя файла состоящее из id зписи, имени файла и расширения
                $fileNameNew = $lastID . $fileName . '.' . $fileExtansion;
                // определяем куда поместим файл
                $fileDestination = 'uploads/' . $fileNameNew;
                // перемещаем файл в место хранения с помощью метода move_uploaded_file()
                // функция имеет два аргумента 1 - откуда перемещаем 2 - куда перемещаем
                // в переменную $fileTmpName - мы в самом начале записали путь временного хранилища
                move_uploaded_file($fileTmpName, $fileDestination);
                // выводим сигнал о результате
                echo 'success!';
                
            } else {
                echo 'Что-то пошло не так'; 
            }
        } else {
            echo 'Слишком большой размер файла'; 
        }
    } else {
        echo 'Не верный тип файла' . '<br>';
    }
}


// вывод картинок на экран =================================================================

// получили все картинки из бд (в БД хранятся не сами изображения а данные о них)
$data = $connection->query('SELECT * from `images`');
// выводим картинки в блок div
echo "<div style='display: flex; flex-wrap: wrap;'>";
    // внутри блока запускаем цикл. пробегаемся по массиву полученному из БД
    forEach($data as $img){
        // создаем переменную куда поместим столово delete и id картинки
        $delete = "delete". $img['id'];
        // создаем переменную куда запишем полный путь до наше картинки
        $image = "./uploads/" . $img['id'] . $img['imagename'] . '.' .  $img['extension'];
        // если нажали на кнопку удалить
        if (isset($_POST[$delete])){
            // получаем id
            $imageID = $img['id'];
            // удаляем данные о картинке из БД
            $connection->query("DELETE FROM `lesson_php`.`images` WHERE id = '$imageID'");
            // удаляем файл из папки uploads
            if (file_exists($image)){
                unlink($image);
            }
        }
        // Создадим проверку (если файл существует выводим его)
        if (file_exists($image)){
            echo "<div>";
            echo "<img style='width: 150px; height=150px;' src=$image >";
            echo "<form method='POST'><button name='$delete' style='display: block; margin: auto;'>Удалить</button></form> </div>";
        }
    }

    echo "</div>";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Работа с файлами</title>
</head>
<body>
    <form method="POST" enctype="multipart/form-data">
        <input type="file" name="file">
        <button name="submit">Отправить</button>
    </form>
</body>

</html>