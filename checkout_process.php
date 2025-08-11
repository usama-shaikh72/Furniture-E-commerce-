<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

include 'db_connect.php'; // Ensure this file exists and is correct

// Get JSON data from fetch request
$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(["error" => "No data received"]);
    exit();
}

$name = $data->name;
$email = $data->email;
$address = $data->address;
$paymentMethod = $data->paymentMethod;
$upi = ($paymentMethod === "online") ? $data->upi : null;
$phone = ($paymentMethod === "online") ? $data->phone : null;

// Insert order details into the database
$sql = "INSERT INTO orders (name, email, address, payment_method, upi, phone) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode(["error" => "SQL error: " . $conn->error]);
    exit();
}

$stmt->bind_param("ssssss", $name, $email, $address, $paymentMethod, $upi, $phone);

if ($stmt->execute()) {
    echo json_encode(["success" => "Order placed successfully!"]);
} else {
    echo json_encode(["error" => "Database error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>

