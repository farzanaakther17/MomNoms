<?php

$servername = "localhost"; 
$username   = "root"; 
$password   = ""; 
$dbname     = "momnoms"; 
$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $pass  = $_POST['password'];

    
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        
      
        if (password_verify($pass, $row['password'])) {
            session_start();
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_email'] = $row['email'];

            
            header("Location: dashboard.php");
            exit;
        } else {
            echo "<script>alert('Incorrect password'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('No account found with that email'); window.history.back();</script>";
    }
}
$conn->close();
?>
