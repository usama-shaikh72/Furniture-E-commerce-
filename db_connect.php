<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$host = "localhost";
$user = "root"; // Corrected variable name
$pass = ""; // No password by default
$dbname = "furniture_store"; // Ensure this database exists

// Create database connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Do not echo success messages in production
?>
