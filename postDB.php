<?php
    $first_name =  $_POST['regName'];
    $regEmail = $_POST['regEmail'];
    $password = $_POST['regPass'];
    $encrypted_Pass = md5($password);
    
        $conn = mysqli_connect("localhost", "root", "", "registration");
        if($conn === false){
            die("ERROR: Could not connect. "
                . mysqli_connect_error());
        }
        $sql = "SELECT * FROM users WHERE email='$regEmail'";
        $result=$conn->query($sql);
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
              // echo "id: " . $row["user_id"]. " - Name: " . $row["name"]. "email: ".$row["email"]."pass: ".$row["password"]. "<br>";
              if($row["email"] == $regEmail){
                
                echo "<script>
                alert('Existing email');
                window.location.href='signIn.html';
                </script>";
          
              }
            }
          
          } else {
            $currDate =date("Y-m-d H:i:s")  ;  
            // Performing insert query execution
            // here our table name is college
            $sql = "INSERT INTO users VALUES ('','$regEmail','$first_name','$encrypted_Pass','$currDate')";
            header('Location: index.html');        

            if(mysqli_query($conn, $sql)){
                // Close connection
                mysqli_close($conn);
            }
          
        }
        
    



    ?>