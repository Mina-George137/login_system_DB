<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

$_signEmail = $_POST['signEmail'];
$pass = $_POST['signPass'];
$encryptedPass = md5($pass);


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
};

$sql = "SELECT * FROM users WHERE email='$_signEmail'";
$result=$conn->query($sql);

   
session_start();

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    // echo "id: " . $row["user_id"]. " - Name: " . $row["name"]. "email: ".$row["email"]."pass: ".$row["password"]. "<br>";
    if($row["password"] == $encryptedPass){
        echo "successful login<br>";
      
        $_SESSION['fname']=$row["name"];

        header("Location: welcome.php");

    }else{
        // password is wrongs
       
        echo "<script>
        alert('wrong password');
        window.location.href='index.html';
        </script>";

    }
  }

} else {
    echo "<script>
    alert('Email does not exists');
    window.location.href='index.html';
    </script>";

}
$conn->close();
?>