<?php
session_start();
require 'db_connect.php'; // include your DB connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];

    $query = "SELECT * FROM admins WHERE email = '$email'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) === 1) {
        $admin = mysqli_fetch_assoc($result);
        if (password_verify($password, $admin['password'])) {
            $_SESSION['admin_logged_in'] = true;  // Set session variable to indicate admin is logged in
            $_SESSION['admin_email'] = $admin['email'];
            header('Location: admin_dashboard.php'); // Redirect to the admin dashboard
            exit();
        } else {
            $_SESSION['error'] = "Incorrect password.";
        }
    } else {
        $_SESSION['error'] = "Admin not found.";
    }

    header('Location: admin_login.php');
    exit();
}
?>
