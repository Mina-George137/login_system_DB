<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<?php
session_start();
?>
<body>
<div class="container">
<div class="col-12">
    <div id="enteringData">
        <div class="container text-center w-75 shading my-5">
            <div class="p-5 w-75 m-auto">
                <h1 class="p-1 text-center font-weight-bold">Welcome <?php echo $_SESSION['fname']; ?></h1>
                
            </div>
        </div>
    </div>
</div>

</div>
<?php
session_destroy();
?>
</body>
</html>