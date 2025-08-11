<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: admin_login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="admindashboard.css">
    
</head>
<body>
    <h1>Welcome, Admin!</h1>
    <a href="admin_logout.php">Logout</a>
    <h2>Add New Product</h2>
<form action="addProduct.php" method="POST" enctype="multipart/form-data">
    <input type="text" name="name" placeholder="Product Name" required><br><br>
    <textarea name="description" placeholder="Product Description" required></textarea><br><br>
    <input type="number" name="price" placeholder="Price" required><br><br>
    <input type="text" name="category" placeholder="Category" required><br><br>
    <input type="file" name="image" accept="image/*" required><br><br>
    <button type="submit">Add Product</button>
</form>
<hr>
<h2>All Products</h2>
<table border="1">
    <tr>
        <th>ID</th><th>Name</th><th>Price</th><th>Category</th><th>Image</th><th>Action</th>
    </tr>
    <?php
    require 'db_connect.php';
    $products = mysqli_query($conn, "SELECT * FROM products");

    while($row = mysqli_fetch_assoc($products)):
    ?>
    <tr>
        <td><?= $row['id'] ?></td>
        <td><?= $row['name'] ?></td>
        <td><?= $row['price'] ?></td>
        <td><?= $row['category'] ?></td>
        <td><img src="<?= $row['image'] ?>" width="70"></td>
        <td>
            <form action="deleteProduct.php" method="POST" onsubmit="return confirm('Delete this product?');">
                <input type="hidden" name="id" value="<?= $row['id'] ?>">
                <button type="submit">Delete</button>
            </form>
        </td>
    </tr>
    <?php endwhile; ?>
</table>

</body>
</html>
