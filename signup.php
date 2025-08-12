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
    $fullName       = trim($_POST['fullName']);
    $email          = trim($_POST['email']);
    $pass           = trim($_POST['password']);
    $confirmPass    = trim($_POST['confirmPassword']);
    $phoneNumber    = trim($_POST['phoneNumber']);

   
    if ($pass !== $confirmPass) {
        echo "<script>alert('Passwords do not match!'); window.history.back();</script>";
        exit;
    }


    $check = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $check->bind_param("s", $email);
    $check->execute();
    $checkResult = $check->get_result();

    if ($checkResult->num_rows > 0) {
        echo "<script>alert('Email already exists!'); window.history.back();</script>";
        exit;
    }

   
    $hashedPass = password_hash($pass, PASSWORD_DEFAULT);

    
    $stmt = $conn->prepare("INSERT INTO users (full_name, email, password, phone_number) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $fullName, $email, $hashedPass, $phoneNumber);

    if ($stmt->execute()) {
        echo "<script>alert('Registration successful! Please log in.'); window.location.href='login.html';</script>";
    } else {
        echo "<script>alert('Error: Could not register.'); window.history.back();</script>";
    }
}
$conn->close();
?>
