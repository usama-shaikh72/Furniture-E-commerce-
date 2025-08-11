<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Step 1: DB Connection
$servername = "localhost";
$username = "root";
$password = ""; // default for XAMPP
$dbname = "furniture_store"; // your actual DB

$conn = new mysqli($servername, $username, $password, $dbname);

// Step 2: Check Connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 3: Get Form Data
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$payment_method = $_POST['payment'];
$upi_id = isset($_POST['upi-id']) ? $_POST['upi-id'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$order_date = date("Y-m-d H:i:s"); // current date & time

// Step 4: Insert into orders table
$sql = "INSERT INTO orders (name, email, address, payment_method, upi_id, phone, order_date) 
        VALUES ('$name', '$email', '$address', '$payment_method', '$upi_id', '$phone', '$order_date')";

if ($conn->query($sql) === TRUE) {
    echo "✅ Order placed successfully!";
} else {
    echo "❌ Error: " . $conn->error;
}

$conn->close();
?>
