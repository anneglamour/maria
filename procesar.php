<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Respuesta del formulario web</title>
</head>
<body>
    <h1>Respuesta del formulario una vez procesados los datos</h1>
    <?php
        echo "Nombre:" . $_POST["nombre"]; . "<br>";
        echo "Email:" . $_POST["email"]; . "<br>";
        echo "Edad:" . $_POST["edad"];

    ?>
</body>
</html>