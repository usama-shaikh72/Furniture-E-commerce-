<?php
require 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $desc = $_POST['description'];
    $price = $_POST['price'];
    $category = $_POST['category'];

    // Handle image upload
    $image_name = $_FILES['image']['name'];
    $image_tmp = $_FILES['image']['tmp_name'];
    $upload_dir = "uploads/";

    // Create folder if it doesn't exist
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir);
    }

    $image_path = $upload_dir . basename($image_name);
    move_uploaded_file($image_tmp, $image_path);

    // Insert into database
    $sql = "INSERT INTO products (name, description, price, category, image) 
            VALUES ('$name', '$desc', '$price', '$category', '$image_path')";

    if (mysqli_query($conn, $sql)) {
        header("Location: admin_dashboard.php");
    } else {
        echo "Error adding product.";
    }
}
?>
