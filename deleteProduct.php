<?php
require 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];

    // Delete the image first
    $result = mysqli_query($conn, "SELECT image FROM products WHERE id = $id");
    $row = mysqli_fetch_assoc($result);
    if ($row) {
        unlink($row['image']); // delete image file
    }

    // Delete from DB
    mysqli_query($conn, "DELETE FROM products WHERE id = $id");

    header("Location: admin_dashboard.php");
}
?>
